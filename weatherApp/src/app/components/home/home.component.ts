import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location = {
    city: 'london'
  };

  weather: any;
  value: any;
  city: any;
  temperature: any;
  celcius: any;
  description: any;
  humidity: any;
  lon: any;
  lat: any;
  date: any;

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.value = localStorage.getItem('location');
    if(this.value != null) {
      this.location = JSON.parse(this.value);
    } else {
      this.location = {
        city: 'london'
      };
    }

    this.weatherService.getWeather(this.location.city).subscribe((response) => {
      console.log(response);
      this.weather = response;
      this.city = this.weather.city.name;
      this.lon = this.weather.city.coord.lon;
      this.lat = this.weather.city.coord.lat;
      this.temperature = Math.round(this.weather.list[0].main.temp);
      this.celcius = Math.round(this.temperature - 273.15);
      this.description = this.weather.list[0].weather[0].description;
      this.humidity = this.weather.list[0].main.humidity;
      this.date = new Date(+this.weather.list[0].dt * 1000).toLocaleDateString();
    });
  }

}
