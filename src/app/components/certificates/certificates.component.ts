import { Component, OnInit } from '@angular/core';
import {certificates} from '../../data/certificates-dados';
import {CertificatesModel} from '../../model/certificate-model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent implements OnInit{
  dadosCertGeral:CertificatesModel[] = [];
  dadosCertFront:CertificatesModel[] = [];
  dadosCertBack:CertificatesModel[] = [];
  
  ngOnInit(): void {
    this.dadosCertGeral = certificates
      .filter((itens:any)=> itens.tipo === 'geral')
      .map((item:any)=> item.itens)
      .flat();

    this.dadosCertFront = certificates
      .filter((itens:any)=> itens.tipo === 'tecnologia')
      .map((item:any)=> item.itens)
      .flat()
      .filter((itens:any) => itens.area === 'front')
      .map((item:any) => item.itens)
      .flat();

    this.dadosCertBack = certificates
      .filter((itens:any) => itens.tipo === 'tecnologia')
      .map((item:any)=> item.itens)
      .flat()
      .filter((itens:any) => itens.area === 'back')
      .map((item:any) => item.itens)
      .flat();
  }

}
