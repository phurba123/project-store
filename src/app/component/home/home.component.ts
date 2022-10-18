import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  welcomeText: string = "welcome to my project store";

  projectList : Project[] =[
    {
      id:'1',
      projName : 'project1',
      description : 'Description of project 1',
      // publishedOn : new Date().toString(),
      tags : ['project', '1'],
      creator: "phursang"
    },
    {
      id:'2',
      projName : 'project2',
      description : 'Description of project 2',
      // publishedOn : new Date().toString(),
      tags : ['project', '2'],
      creator:"anonymous"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
