import { Component, Input } from '@angular/core';
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

  constructor(){}

  ngOnInit(){
    this.spanData = formatDate(this.dataAtual, 'dd/MM/yyyy', 'en-Us');
  }

}
