import { Component, OnInit } from '@angular/core';
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
  // $projects!: Observable<Project[]>;

  constructor( private _fs: FirebaseService) { }

  ngOnInit( ): void {
    this._fs.currentImgUrl.subscribe((url: any) => {
      this.currentImgUrl = url;
      console.log('currentimg url subscribe : ', this.currentImgUrl)
    })
  }

  onSubmit() {
    this.project= {
      projName: this.projName,
      description: this.description,
      creator: this.creator,
      tags: this.tags
    }
    if(this.currentFile && this.currentFileName) {
      const task = this._fs.addProjectImg(this.currentFileName, this.currentFile)
    }

    // this._fs.addNewProject(this.project);
  }

  uploadFile(e: any){
    this.currentFile = e.target.files[0];
    // extract fileName from file path
    let defPath: string = e.target.value;
    let fileNameSplits: string[] = defPath.split('\\');
    let lastIndex = fileNameSplits.length - 1;
    this.currentFileName= fileNameSplits[lastIndex];

    // const task = this._fs.addProjectImg(fileName, file)
  }

}
