import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = 
[
  {
    path: 'employee', component:EmployeeListComponent
  },
  {
    path: 'dept', component:DepartmentListComponent
  },
  {
    path:'', component:HomePageComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
