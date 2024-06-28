import { Component, OnInit } from '@angular/core';
import {portfolio} from '../../data/portfolio_dados';
import { GitModel } from '../../model/git-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit{
  dadosPortfolioWeb:GitModel[]= [];
  dadosPortfolioBanco:GitModel[]=[];

  constructor(){}

  ngOnInit(){
    this.dadosPortfolioWeb = portfolio
      .filter((dados: any)=>dados.tipo === 'web')
      .map((dado: any) => dado.itens)
      .flat();

    this.dadosPortfolioBanco = portfolio
      .filter((dados: any)=> dados.tipo === 'banco_de_dados')
      .map((dado: any) => dado.item)
      .flat();
  }
}
