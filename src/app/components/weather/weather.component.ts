import { Component, Input } from '@angular/core';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  weather: any[] = [];
  errorMessage: string= '';
  dataAtual: Date = new Date();
  spanData: string='';

  //Decorator para buscar se o menu está aberto ou não
  @Input() menuAberto ='';

  constructor(private weatherForecast:WeatherForecastService){

  }

  ngOnInit(){
    this.getWeatherData('BR')
    this.spanData = formatDate(this.dataAtual, 'dd/MM/yyyy', 'en-Us');
  }

  getWeatherData(city:string){
    this.weatherForecast.getWeather(city)
    .subscribe( {next: (data: any) => {
      this.weather = data;
      this.weather[0].date = formatDate(data[0].date, 'dd/MM/yyyy', 'en-US');
    }, error: (error: any) => {
      this.errorMessage = error;
    }})
  }
}
