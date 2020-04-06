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
        'imageUrl': new FormControl(null, [Validators.required]), // regex pattern for url
        'actualPrice': new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
        'promoPrice': new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
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
    //   'pickUpMode': 'delivery',
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

  async submitFood() {
    console.log("hi")

   const submittedForm = this.addFoodForm.value;
  const submission = await this.orderService.submitOrder(submittedForm.food);
  console.log(submission)
  if(submission['responseCode'] == "00") {
    alert(submission['responseMessage']) 
    this.addFoodForm.reset()
  }else {
    alert("Failed to submit. Please check console and try again!!")
  }
  }

}
