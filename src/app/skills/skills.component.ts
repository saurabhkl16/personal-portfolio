import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: 'skills.template.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material, Typescript',
      level: 'Intermidiate',
      rating: 80,
    },
    {
      name: 'HTML, CSS',
      level: 'Intermidiate',
      rating: 80,
    },
    {
      name: 'JAVA',
      level: 'Intermidiate',
      rating: 80,
    },
    {
      name: 'React, Javascript',
      level: 'Intermidiate',
      rating: 60,
    },
  ];
}
