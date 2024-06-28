import { Component } from '@angular/core';
import { ArticleMiniComponent } from '../article-mini/article-mini.component';
import { FilletComponent } from '../fillet/fillet.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ArticleMiniComponent, FilletComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
