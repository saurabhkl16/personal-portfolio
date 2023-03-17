import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: 'projects.template.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Loan Product Web App',
      technologies: 'Angular 13, Javascript, Typescript, Bootstrap',
      description: ['Worked as a front-end developer.'],
    },
    {
      title: 'College Website',
      technologies: 'Html, CSS, React, Javascript, Bootstrap',
      description: ['Designed in final year project'],
    },
  ];
}
