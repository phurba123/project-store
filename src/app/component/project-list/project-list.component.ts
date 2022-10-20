import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  $projects !: Observable<Project[]>;

  constructor( private _fs: FirebaseService) { }

  ngOnInit(): void {
     this.$projects = this._fs.projects;
    // console.log('projects recei')
  }

}
