import { Component, OnInit } from '@angular/core';
import { ArticleMiniComponent } from '../article-mini/article-mini.component';
import { FilletComponent } from '../fillet/fillet.component';
import {IntersectionObserverDirective} from '../../directive/intersection-observer.directive';
import {about} from '../../data/about-dados';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ArticleMiniComponent, FilletComponent, IntersectionObserverDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  altura1: string = '0';
  largura1: string = '0';
  opacidade1: string = '0';

  altura2: string = '0';
  largura2: string = '0';
  opacidade2: string = '0';

  altura3: string = '0';
  largura3: string = '0';
  opacidade3: string = '0';

  dadosAbout1!:any;
  dadosAbout2!:any;
  dadosAbout3!:any;

  ngOnInit(): void {
    this.dadosAbout1 = about.filter(item => item.id === 1)[0];
    this.dadosAbout2 = about.filter(item => item.id === 2)[0];
    this.dadosAbout3 = about.filter(item => item.id === 3)[0];
  }

  openImage1(isIntersecting: Boolean):void{
    if(isIntersecting){
      this.altura1 = '15em';
      this.largura1 = '20em';
      this.opacidade1 = '1';
    }else{
      this.altura1 = '0';
      this.largura1 = '0';
      this.opacidade1 = '0';
    }
  }

  openImage2(isIntersecting: Boolean):void{
    if(isIntersecting){
      this.altura2 = '15em';
      this.largura2 = '20em';
      this.opacidade2 = '1';
    }else{
      this.altura2 = '0';
      this.largura2 = '0';
      this.opacidade2 = '0';
    }
  }

  openImage3(isIntersecting: Boolean):void{
    if(isIntersecting){
      this.altura3 = '15em';
      this.largura3 = '20em';
      this.opacidade3 = '1';
    }else{
      this.altura3 = '0';
      this.largura3 = '0';
      this.opacidade3 = '0';
    }
  }
}
