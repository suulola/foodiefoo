import { NgModule } from '@angular/core';
import { LoginComponent } from './../components/login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "/login", component: LoginComponent},
];



export const AppRoutes = RouterModule.forChild(routes);
