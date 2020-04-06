import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string = "Anon";

  services: any =  []

  constructor(
    private authService: AuthService,
    private orderService: OrdersService
    ) { }

  ngOnInit() {
    var state = sessionStorage.getItem("data")
    if(state) {
      const parsedData = JSON.parse(state);

      console.log(parsedData)

      this.username = parsedData.response.username;

      if(parsedData.response.roles[0].toLowerCase() === "admin") {
        this.services = [
          {
            title: "Food", 
            image: "https://image.flaticon.com/icons/svg/706/706164.svg", 
            description: "Eat the best food to your satisfaction",
            url: "/auth/food"
          },
          {title: "Exotic Drinks", image: "https://img.icons8.com/emoji/2x/tropical-drink.png", description: "Eat the best food to your satisfaction"},
          {title: "Fruits", image: "https://image.flaticon.com/icons/svg/1147/1147832.svg", description: "Eat the best food to your satisfaction"},
          {title: "Pharmacy", image: "https://image.flaticon.com/icons/svg/843/843196.svg", description: "Eat the best food to your satisfaction"},
          {title: "Others", image: "https://www.flaticon.com/premium-icon/icons/svg/1926/1926960.svg", description: "Eat the best food to your satisfaction"},
          {title: "Admin", image: "https://www.flaticon.com/premium-icon/icons/svg/1926/1926960.svg", description: "Add Food ",  url: "/auth/admin"},
        ]
      }else {
        this.services = [
          {
            title: "Food", 
            image: "https://image.flaticon.com/icons/svg/706/706164.svg", 
            description: "Eat the best food to your satisfaction",
            url: "/auth/food"
          },
          {title: "Exotic Drinks", image: "https://img.icons8.com/emoji/2x/tropical-drink.png", description: "Eat the best food to your satisfaction"},
          {title: "Fruits", image: "https://image.flaticon.com/icons/svg/1147/1147832.svg", description: "Eat the best food to your satisfaction"},
          {title: "Pharmacy", image: "https://image.flaticon.com/icons/svg/843/843196.svg", description: "Eat the best food to your satisfaction"},
          {title: "Others", image: "https://www.flaticon.com/premium-icon/icons/svg/1926/1926960.svg", description: "Eat the best food to your satisfaction"},      
        ]
      }


    }
  }

}
