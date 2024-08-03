import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { HeaderResponsiveComponent } from '../../components/header-responsive/header-responsive.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ContactFormComponent,
    HeaderResponsiveComponent],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss','./contato-responsive.component.scss']
})
export class ContatoComponent {
  
}
