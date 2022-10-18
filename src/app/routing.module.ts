import { RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core'
import { HomeComponent } from './component/home/home.component';

const routes:Routes=[
    {path:'store', component: HomeComponent},
    {path:'', redirectTo:'store',pathMatch:'full'}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[]
})

export class AppRoutingModule{}