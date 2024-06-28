import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from '../weather/weather.component';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [CommonModule, WeatherComponent]
})
export class HeaderComponent {
  larguraMenu:string = "4em";
  corSombra:string = "#00ff00";
  corBorda:string = "#00ff00";
  dataEHora: Date = new Date();
  tipoData: string = '';

  constructor(){

  }

  ngOnInit(){
  }

  openMenu(){
    this.larguraMenu = "15em";
    this.corBorda="#8911BA";
    this.corSombra= "#FD008B" 
    this.tipoData = "true"
  }

  closeMenu(){
    this.larguraMenu = "4em";
    this.corBorda="#00ff00";
    this.corSombra = "#00ff00";
    this.tipoData = "";
  }

}
