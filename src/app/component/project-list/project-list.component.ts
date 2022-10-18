import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/interface/projectlist.interface';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() projects !: Project[];

  constructor() { }

  ngOnInit(): void {
  }

}
