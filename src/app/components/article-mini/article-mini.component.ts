import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-article-mini',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-mini.component.html',
  styleUrls: ['./article-mini.component.scss', './article-mini-responsive.component.scss']
})
export class ArticleMiniComponent implements OnInit{
  @Input() urlImagem!:string;
  @Input() titleAbout!:string;
  @Input() texto!:string;
  @Input() altura!:string;
  @Input() largura!:string;
  @Input() opacidade!: string;
  
  ngOnInit():void{

    this.altura = '0';
    this.largura = '0';
    this.opacidade = '0';
  }
  


}
