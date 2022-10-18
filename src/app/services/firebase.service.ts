import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Project } from '../models/project';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
//   export interface Project {
//     id?: string|number,
//     name: string,
//     description: string,
//     creator: string,
//     tags: string[],
//     imgUrl?: any,
// }

  // private name!: string ;
  // description!: string;
  // creator: string = "phursang";
  // tags: string[] = [];
  // img: any;
  currentImgUrl: Subject<any> = new Subject() ;
  private _projCollection!: AngularFirestoreCollection<Project>;
  projects!: Observable<Project[]>;

  constructor(
    private _afs: AngularFirestore,
    private _storage: AngularFireStorage
  ) { 
    this._projCollection = _afs.collection<Project>('projects');
    this.projects = this._projCollection.valueChanges();
  }

  // add new project data
  addNewProject(item: Project) {
    this._projCollection.add(item);
  }

  deleteProject(item: Project) {
    // this._projCollectio
  }

  addProjectImg(filePath: string, file: Blob): AngularFireUploadTask {
    let url;
    const ref = this._storage.refFromURL(`gs://${environment.firebase.storageBucket}/images/${filePath}`);
    const task = ref.put(file);
    task.snapshotChanges().pipe(
      finalize(() => url = ref.getDownloadURL() )
   )
  .subscribe((e?: any) => console.log('e: ', e))
    return task;
  }
}
