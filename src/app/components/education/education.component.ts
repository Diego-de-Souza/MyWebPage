import { Component } from '@angular/core';
import { FilletComponent } from '../fillet/fillet.component';
import {IntersectionObserverDirective} from '../../directive/intersection-observer.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [FilletComponent, IntersectionObserverDirective],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss','./education-responsive.component.scss']
})
export class EducationComponent {

  openEducation(isIntersecting: Boolean):void {
    if(isIntersecting){
      document.querySelectorAll('.education__main__content__child').forEach(filho =>{
        filho.classList.add('visibilityChild')
      })
    }else{
      document.querySelectorAll('.education__main__content__child').forEach(filho =>{
        filho.classList.remove('visibilityChild')
      })
    }
  }

  openEducation2(isIntersecting: Boolean):void {
    if(isIntersecting){
      document.querySelectorAll('.education__main__content__child2').forEach(filho =>{
        filho.classList.add('visibilityChild')
      })
    }else{
      document.querySelectorAll('.education__main__content__child2').forEach(filho =>{
        filho.classList.remove('visibilityChild')
      })
    }
  }
}
