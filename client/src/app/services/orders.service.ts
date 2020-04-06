import { map } from 'rxjs/operators';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../model/User';
import axios from 'axios';
import { Subject } from 'rxjs';

interface Response {
  response: any;
  error: any;
}

interface OrderRequest {
  foodName: string,
  foodDesc : string
  imageUrl: string,
  actualPrice: number,
  promoPrice: number
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  getAllOrdersUrl: string = `http://localhost:8080/orders/`
  createFood: string = `http://localhost:8080/orders/`



  constructor(
    private http: HttpClient,

  ) { }

  // authenticatedRequestHeader: any = () => {
  //   const reqHeader = new Headers();

  //   var state = sessionStorage.getItem("data")

  //   if (!state) {
  //     return null;
  //   }
  //   const parsedData = JSON.parse(state);
  //   console.log(parsedData.response.token)


  //   reqHeader.append('Content-Type', 'application/json');
  //   reqHeader.append('Access-Control-Allow-Origin', '*');
  //   reqHeader.append('Access-Control-Allow-Methods', 'POST');
  //   reqHeader.append("Authorization", `Bearer ${parsedData.response.token}`);

  //   return reqHeader;

  // }


  async submitOrder(orderRequest: OrderRequest) {
    // const authReqHeader = this.authenticatedRequestHeader();
    const reqHeader = new Headers();

    var state = sessionStorage.getItem("data")


    const parsedData = JSON.parse(state);

    axios.defaults.headers.common['Authorization'] = `Bearer ${parsedData.response.token}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    reqHeader.append('Access-Control-Allow-Origin', '*');

  return await axios({ method: 'POST', url: this.createFood, data: orderRequest })
      .then(res => {
        console.log(res)
        return res.data
      }).catch(error => console.log(error))

  }
   state = sessionStorage.getItem("data")
  parsedData = JSON.parse(this.state);

  async fetchAllOrders() {
    // const authReqHeader = this.authenticatedRequestHeader();
    const reqHeader = new Headers();

    

    axios.defaults.headers.common['Authorization'] = `Bearer ${this.parsedData.response.token}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    reqHeader.append('Access-Control-Allow-Origin', '*');

  return  await axios({ method: 'GET', url: this.getAllOrdersUrl })
      .then(res => {
        console.log(res)
        return res.data;
      }).catch(error => console.log(error))

  }

}
