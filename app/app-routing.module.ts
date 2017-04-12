import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeFormComponent } from './employee-form.component';
const routes: Routes = [
      { path: 'angulartemplateform', component: EmployeeListComponent},
      { path: 'angularmoduleformdata', component: EmployeeDetailComponent},
      { path: 'angularmodulebuilder', component: EmployeeFormComponent},


    ]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
export const routingComponents = [EmployeeListComponent, EmployeeDetailComponent,EmployeeFormComponent];