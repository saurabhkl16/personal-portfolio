import { Component } from '@angular/core';

@Component({
  selector: 'personal-info',
  templateUrl: 'personal-info.template.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent {
  myData: string[][] = [
    ['Name', 'Saurabh Kishor Lomte'],
    ['DOB', '16/06/1998'],
    ['Work Exp', '1 Year 2 Months'],
    ['Education', 'Softwere Engineer'],
    ['Interests', 'Football, Badminton'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 25 years of experience in software industry.',
    'Worked as Head of Product Management in Google for various technologies (Google Search Engine, Google Drive, Chrome Browser).',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as CEO of Google Alphabet',
  ];
}
