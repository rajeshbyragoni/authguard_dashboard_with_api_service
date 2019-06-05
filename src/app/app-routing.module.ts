import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {DashboardComponent} from './dashboard/dashboard.component';
import  {LoginComponent} from './login/login.component';
import  {EditComponent} from './edit/edit.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [

{path:'', component :LoginComponent},
{path:'dashboard', component : DashboardComponent, canActivate: [AuthGuard]},
{path:'edit', component : EditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
