import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SettingComponent } from './components/setting/setting.component';
import { WeatherService } from './components/weather.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

const appRoutes = [
  {
    path:'',component:SettingComponent
  },
  {
    path:'setting',component:SettingComponent
  },
  {
    path:'home',component:HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
