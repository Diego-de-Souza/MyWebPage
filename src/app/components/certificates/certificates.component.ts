import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import {certificates} from '../../data/certificates-dados';
import {CertificatesModel} from '../../model/certificate-model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogTemplateComponent } from '../../templates/dialog.template/dialog.template.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive, 
    MatButtonModule, 
    MatDialogModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesComponent implements OnInit{
  dadosCertGeral:CertificatesModel[] = [];
  dadosCertFront:CertificatesModel[] = [];
  dadosCertBack:CertificatesModel[] = [];
  menuCertificados: string = 'Clique para mais';
  readonly dialog = inject(MatDialog);
  
  ngOnInit(): void {
    this.dadosCertGeral = certificates
      .filter((itens:any)=> itens.tipo === 'geral')
      .map((item:any)=> item.itens)
      .flat()
      .slice(0, 5);
  }

  openMore(){
    if(this.menuCertificados === 'Clique para mais'){
      this.dadosCertGeral = certificates
        .filter((itens:any)=> itens.tipo === 'geral')
        .map((item:any)=> item.itens)
        .flat();
      
      this.menuCertificados = "Clique para menos";
    }else{
      this.dadosCertGeral = certificates
      .filter((itens:any)=> itens.tipo === 'geral')
      .map((item:any)=> item.itens)
      .flat()
      .slice(0, 10);

      this.menuCertificados = 'Clique para mais';
    }
  }

  openDialog(certificateName:string){
    const dialogRef = this.dialog.open(DialogTemplateComponent, {
      data:certificateName
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
