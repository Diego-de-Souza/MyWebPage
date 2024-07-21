import { Component, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
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
  @Input() menuFloat:string = ``; 

  constructor(){}

  ngOnInit(){
    this.spanData = formatDate(this.dataAtual, 'dd/MM/yyyy', 'en-Us');
  }

  getStyle(){
    return {
      color: this.menuFloat === 'true'? '#FFD700': null,
      'background-color': this.menuFloat === 'true'? 'transparent': null
    }
  }

}
