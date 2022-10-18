import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interface/projectlist.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  projectList : Project[] =[
    {
      id:'1',
      projectName : 'project1',
      description : 'Description of project 1',
      publishedOn : new Date().toString(),
      tags : ['project', '1']
    },
    {
      id:'2',
      projectName : 'project2',
      description : 'Description of project 2',
      publishedOn : new Date().toString(),
      tags : ['project', '2']
    },
    {
      id:'3',
      projectName : 'project3',
      description : 'Description of project 3',
      publishedOn : new Date().toString(),
      tags : ['project', '3']
    },

    {
      id:'1',
      projectName : 'project1',
      description : 'Description of project 1',
      publishedOn : new Date().toString(),
      tags : ['project', '1']
    },
    {
      id:'2',
      projectName : 'project2',
      description : 'Description of project 2',
      publishedOn : new Date().toString(),
      tags : ['project', '2']
    },
    {
      id:'3',
      projectName : 'project three',
      description : 'Description of project 3',
      publishedOn : new Date().toString(),
      tags : ['project', '3']
    },
    {
      id:'3',
      projectName : 'project three',
      description : 'Description of project 3',
      publishedOn : new Date().toString(),
      tags : ['project', '3']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
