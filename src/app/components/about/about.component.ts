import { Component, HostListener, OnInit } from '@angular/core';
import { ArticleMiniComponent } from '../article-mini/article-mini.component';
import { FilletComponent } from '../fillet/fillet.component';
import { IntersectionObserverDirective } from '../../directive/intersection-observer.directive';
import { about } from '../../data/about-dados';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ArticleMiniComponent, FilletComponent, IntersectionObserverDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
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

  dadosAbout1!: any;
  dadosAbout2!: any;
  dadosAbout3!: any;

  larguraTela: number = window.innerWidth;

  ngOnInit(): void {
    this.dadosAbout1 = about.find(item => item.id === 1);
    this.dadosAbout2 = about.find(item => item.id === 2);
    this.dadosAbout3 = about.find(item => item.id === 3);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.larguraTela = window.innerWidth;
  }

  openImage1(isIntersecting: boolean): void {
    if (isIntersecting) {
      if(this.larguraTela <= 480){
        this.altura1 = '10em';
        this.largura1 = '15em';
      } else if (this.larguraTela <= 900) {
        this.altura1 = '15em';
        this.largura1 = '20em';
      } else if (this.larguraTela <= 1024) {
        this.altura1 = '10em';
        this.largura1 = '15em';
      } else {
        this.altura1 = '15em';
        this.largura1 = '20em';
      }
      this.opacidade1 = '1';
    } else {
      this.altura1 = '0';
      this.largura1 = '0';
      this.opacidade1 = '0';
    }
  }

  openImage2(isIntersecting: boolean): void {
    if (isIntersecting) {
      if(this.larguraTela <= 480){
        this.altura2 = '10em';
        this.largura2 = '15em';
      } else if (this.larguraTela <= 900) {
        this.altura2 = '15em';
        this.largura2 = '20em';
      } else if (this.larguraTela <= 1024) {
        this.altura2 = '10em';
        this.largura2 = '15em';
      } else {
        this.altura2 = '15em';
        this.largura2 = '20em';
      }
      this.opacidade2 = '1';
    } else {
      this.altura2 = '0';
      this.largura2 = '0';
      this.opacidade2 = '0';
    }
  }

  openImage3(isIntersecting: boolean): void {
    if (isIntersecting) {
      if(this.larguraTela <= 480){
        this.altura3 = '10em';
        this.largura3 = '15em';
      } else if (this.larguraTela <= 900) {
        this.altura3 = '15em';
        this.largura3 = '20em';
      } else if (this.larguraTela <= 1024) {
        this.altura3 = '10em';
        this.largura3 = '15em';
      } else {
        this.altura3 = '15em';
        this.largura3 = '20em';
      }
      this.opacidade3 = '1';
    } else {
      this.altura3 = '0';
      this.largura3 = '0';
      this.opacidade3 = '0';
    }
  }
}
