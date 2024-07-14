import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-menu-float',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './menu-float.component.html',
  styleUrl: './menu-float.component.scss'
})
export class MenuFloatComponent {
  
  constructor(private viewportScroller: ViewportScroller){}

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
