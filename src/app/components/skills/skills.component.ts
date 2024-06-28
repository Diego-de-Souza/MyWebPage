import { Component } from '@angular/core';
import { FilletComponent } from '../fillet/fillet.component';
import {skills} from '../../data/skills_dados';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FilletComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
 linguagemSkills:any = [];
 softwareSkills:any =[];

 ngOnInit(){
    this.linguagemSkills = skills.find(item => item.tipo === 'language')?.itens || [];
    this.softwareSkills = skills.find(item => item.tipo === 'software')?.itens || [];

 }

}
