import { OrderlistComponent } from './../sharedcomponents/orderlist/orderlist.component';
import { ModalComponent } from './../sharedcomponents/modal/modal.component';
import { FoodComponent } from './food/food.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatGridListModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';
import { HoverDirective } from 'src/app/directive/hover.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminboardComponent } from './adminboard/adminboard.component';

@NgModule({
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forChild([
      {path: "dash", component: DashboardComponent},
      {path: 'food', component: FoodComponent},
      {path: 'admin', component: AdminboardComponent},
    ]),
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  declarations: [
    DashboardComponent, 
    FoodComponent,
    ModalComponent,
    HoverDirective,
    OrderlistComponent,
    AdminboardComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class AuthuserModule { }
