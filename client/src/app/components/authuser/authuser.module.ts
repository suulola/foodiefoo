import { ModalComponent } from './../sharedcomponents/modal/modal.component';
import { FoodComponent } from './food/food.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatGridListModule, MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
  
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forChild([
      {path: "dash", component: DashboardComponent},
      {path: 'food', component: FoodComponent}
    ])
  ],
  declarations: [
    DashboardComponent, 
    FoodComponent,
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class AuthuserModule { }
