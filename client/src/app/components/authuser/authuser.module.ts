import { ModalComponent } from './../sharedcomponents/modal/modal.component';
import { FoodComponent } from './food/food.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatGridListModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { HoverDirective } from 'src/app/directive/hover.directive';

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
    ModalComponent,
    HoverDirective
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class AuthuserModule { }
