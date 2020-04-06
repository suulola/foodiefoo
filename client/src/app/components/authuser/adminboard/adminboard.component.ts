import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {
  modeOfCollection = ['Pickup Onsite', 'Delivery Service'];
  addFoodForm: FormGroup;
  forbiddenFoodItems = ['pap', 'cocaine']

  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.addFoodForm = new FormGroup({
      'food': new FormGroup({
        'foodName': new FormControl(null, [Validators.required, this.forbiddenItems.bind(this)]),
        'foodDesc': new FormControl(null),
        'imageUrl': new FormControl(null, [Validators.required]),
        'actualPrice': new FormControl(null, [Validators.required]),
        'promoPrice': new FormControl(null, [Validators.required]),
      }),
      'pickUpMode': new FormControl('pickup onsite'),
      'ingredients': new FormArray([])
    })



    // this.addFoodForm.setValue({
    //   'food': {
    //     'foodName': "Rice",
    //     'foodDesc': "Rice",
    //     'imageUrl': "Rice",
    //     'actualPrice': "Rice",
    //     'promoPrice': "Rice",
    //   },
    //   'pickUpMode': 'delievery',
    //   'ingredients': [],

    // })
  }

  forbiddenItems(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenFoodItems.indexOf(control.value) !== -1) {
      return { 'foodItemIsForbidden': true }
    }
    return null;
  }

  onAddIngredient() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.addFoodForm.get("ingredients")).push(control)
  }

  submitFood() {
    console.log("hi")
    this.orderService.fetchAllOrders()
    // console.log(this.addFoodForm)
    // console.log(this.addFoodForm.get('food.foodName'))
    // this.addFoodForm.reset()
  }

}
