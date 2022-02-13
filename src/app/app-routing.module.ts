import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: '', component:DashboardComponent},
  {path: 'addemployeeform', component:AddEmployeeFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DashboardComponent,AddEmployeeFormComponent]

