import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "dash", component: DashboardComponent}
    ])
  ],
  declarations: [DashboardComponent]
})
export class AuthuserModule { }
