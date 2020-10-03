import { NgModule } from '@angular/core';   
import {Routes, RouterModule} from '@angular/router'
import { AuthSecurityGuard } from './shared/guards/security.guard';
 
const routes: Routes = [
    {
        path: '',
        loadChildren: './main/app.module#AppModule',
        canActivate: [AuthSecurityGuard]
    },
    //{path:'login', loadChildren: './login/login.module#LoginModule'},
    //{path:'bpm', loadChildren: './bpm/bpm.module#BpmModule'},
    {path:'**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }

