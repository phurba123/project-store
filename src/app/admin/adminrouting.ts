import { RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core'

const routes:Routes=[
    // {path: 'store/component', component: AdminComponent}
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[]
})

export class AppRoutingModule{}