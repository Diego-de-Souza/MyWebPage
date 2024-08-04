import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { CertificatePrint } from '../../model/certificate-model';

@Component({
  selector: 'app-dialog.template',
  standalone: true,
  imports: [
    MatDialogModule, 
    MatButtonModule],
  templateUrl: './dialog.template.component.html',
  styleUrl: './dialog.template.component.scss'
})
export class DialogTemplateComponent {
  readonly dialogRef = inject(MatDialogRef<DialogTemplateComponent>);
  readonly data = inject<CertificatePrint>(MAT_DIALOG_DATA);
  readonly certificate:CertificatePrint = this.data;

  constructor(){
    console.log(this.certificate)
  }
}
