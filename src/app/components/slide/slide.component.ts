import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common'
import { RotatingLogoComponent } from '../rotating-logo/rotating-logo.component';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [NgOptimizedImage,
      RotatingLogoComponent
  ],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss', './slide-responsive.component.scss']
})
export class SlideComponent {

}
