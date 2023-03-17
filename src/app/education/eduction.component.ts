import { Component } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: 'education.template.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'MPGI SOE Nanded',
      course: 'B-TECH In Computer Science',
      duration: '2016-21',
      score: '7.9 CGPA',
    },
    {
      institute: 'Jawahar Navodaya Vidyalaya, Nanded',
      course: 'HSC',
      duration: '2015-16',
      score: '69%',
    },
    {
      institute: 'Jawahar Navodaya Vidyalaya, Nanded',
      course: 'SSC',
      duration: '2013-14',
      score: '7.6 CGPA',
    },
  ];
}
