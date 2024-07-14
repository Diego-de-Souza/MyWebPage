import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

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
  readonly data = inject<string>(MAT_DIALOG_DATA);
  readonly certificateName:string = this.data;
}
