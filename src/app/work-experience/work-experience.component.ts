import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: 'work-experience.template.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Softwere Development Engineer 1',
      company: 'Novopay Solutions',
      duration: 'Jan 22 - March 23',
      description: [
        ' Worked as a front-end developer with the LMS team.',
        'Created loan products for Banking projects.',
        'Designed web applications using Angular, Js, and Bootstrap with API integration.',
        'Before starting development, Multiple times collaborate with the graphic designer and Cooperate with the back-end developer in the process of building RESTful APIs.',
        'Update the Novopay web app with the latest technologies.',
        'Help to Interns.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
