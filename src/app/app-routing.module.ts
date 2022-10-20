import { RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core'
import { HomeComponent } from './component/home/home.component';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes:Routes=[
    {path:'store', component: HomeComponent},
    {path:'', redirectTo:'store',pathMatch:'full'},
    { path: 'store/project/:projectId ', component: ProjectViewComponent},
    {
        path:'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    }
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}