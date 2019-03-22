import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '06ed64cb0fed363108460c5321432cf9';
  url;

  constructor(private http:HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city) {
    return this.http.get(this.url + city + '&APPID=' + this.apiKey);
  };
}
