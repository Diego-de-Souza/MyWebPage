import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideComponent } from './components/slide/slide.component';
import { HeaderComponent } from './components/header/header.component';
import { RotatingLogoComponent } from './components/rotating-logo/rotating-logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    SlideComponent,
    HeaderComponent,
    RotatingLogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'diego-dev';
}
