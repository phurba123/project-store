import { Component, OnInit } from '@angular/core';
import { finalize, Observable, Subject, takeUntil } from 'rxjs';
import { Project } from 'src/app/models/project';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: []
})
export class DashboardComponent implements OnInit {

  projName!: string ;
  description!: string;
  creator: string = "phursang";
  tag!: string;
  tags: string[] = [];
  img: any;
  project!: Project;
  currentImgUrl:any;
  currentFileName!: string;
  currentFile!: Blob;
  showToast: boolean = false;
  // $projects!: Observable<Project[]>;
  destroy$: Observable<boolean> = new Subject();
  allProjects$!:Observable<Project[]> ;
  projLink!: string;

  constructor( private _fs: FirebaseService) {
   }

  ngOnInit( ): void {
    this.allProjects$ = this._fs.projects;
  }

  onSubmit() {
    console.log('on s;.fgukdwgiuvjsbvm')
    this.tags.push(this.tag)
    this.project= {
      projName: this.projName,
      description: this.description,
      creator: this.creator,
      tags: this.tags,
      projLinks: this.projLink? this.projLink:''
    };
    if(this.currentFile && this.currentFileName) {
      const task = this._fs.addProjectImg(this.currentFileName, this.currentFile, this.project);
    }
    else {
      this._fs.addNewProject(this.project);
    }

    this.projName = "";this.description= "";this.tags=[];this.tag = "";this.projLink = "";
  }

  uploadFile(e: any){
    this.currentFile = e.target.files[0];
    // extract fileName from file path
    let defPath: string = e.target.value;
    let fileNameSplits: string[] = defPath.split('\\');
    let lastIndex = fileNameSplits.length - 1;
    this.currentFileName= fileNameSplits[lastIndex];
  }

}
