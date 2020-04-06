import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../../sharedcomponents/modal/modal.component';
import { OrdersService } from 'src/app/services/orders.service';
import { Food } from '../../../model/Food'

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})



export class FoodComponent implements OnInit {

  allFood: Food[];

  constructor(
    public dialog: MatDialog,
    public orderService: OrdersService
    ) { }

  async ngOnInit() {
  let response = await this.orderService.fetchAllOrders();
  this.allFood = response['data']
  console.log(this.allFood)

  }

  selectedItem: any = []


 


  registerOrder(item: any): void {
    console.log(item)
    this.selectedItem.push(item);
    console.log(this.selectedItem)
    console.log("hadfsl")
    const dialogRef = this.dialog.open(ModalComponent)


  }

}
