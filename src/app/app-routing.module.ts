import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
 
  
  { path: 'detail/:id', component: EmployeeComponent },
  { path: 'user', component: UserComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
