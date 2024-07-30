import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FilletComponent } from '../fillet/fillet.component';
import {skills} from '../../data/skills_dados';
import {IntersectionObserverDirective} from '../../directive/intersection-observer.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FilletComponent,
    IntersectionObserverDirective
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skills-responsive.component.scss']
})
export class SkillsComponent{
 linguagemSkills:any = [];
 softwareSkills:any =[];

 @ViewChild('sectionElement') sectionElement!: ElementRef;

 larguraTela: number = window.innerWidth;

 ngOnInit(){
    this.linguagemSkills = skills.find(item => item.tipo === 'language')?.itens || [];
    this.softwareSkills = skills.find(item => item.tipo === 'software')?.itens || [];

 }

 onIntersection(isIntersecting: boolean) {
    if(this.larguraTela >= 480){
      if (isIntersecting) {
        this.sectionElement.nativeElement.classList.add('abraKadabra');
        document.querySelectorAll('.skills__myskills__desc .skills__myskills__desc__left__icons ').forEach(filho => {
          filho.classList.add('entradaAEsquerda');
        });
        document.querySelectorAll('.skills__myskills__desc .skills__myskills__desc__right__icons ').forEach(filho => {
          filho.classList.add('entradaADireita');
        });
      } else {
        this.sectionElement.nativeElement.classList.remove('abraKadabra');
        document.querySelectorAll('.skills__myskills__desc .skills__myskills__desc__left__icons').forEach(filho => {
          filho.classList.remove('entradaAEsquerda');
        });
        document.querySelectorAll('.skills__myskills__desc .skills__myskills__desc__right__icons ').forEach(filho => {
          filho.classList.remove('entradaADireita');
        });
      }
    }else{
      if (isIntersecting) {
        this.sectionElement.nativeElement.classList.add('abraKadabra');
        document.querySelectorAll('.skills__myskills__desc .skills__myskills__desc__left__icons ').forEach(filho => {
          filho.classList.add('aparecer');
        });
        document.querySelectorAll('.skills__myskills__desc .skills__myskills__desc__right__icons ').forEach(filho => {
          filho.classList.add('aparecer');
        });
      } else {
        this.sectionElement.nativeElement.classList.remove('abraKadabra');
        document.querySelectorAll('.skills__myskills__desc .skills__myskills__desc__left__icons').forEach(filho => {
          filho.classList.remove('enaparecer');
        });
        document.querySelectorAll('.skills__myskills__desc .skills__myskills__desc__right__icons ').forEach(filho => {
          filho.classList.remove('aparecer');
        });
      }
    }
    
 }

}
