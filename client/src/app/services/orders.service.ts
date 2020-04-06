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

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  getAllOrdersUrl: string = `http://localhost:8080/orders/hello`



  constructor(
    private http: HttpClient,

  ) { }

  authenticatedRequestHeader: any = () => {
    const reqHeader = new Headers();

    var state = sessionStorage.getItem("data")

    if (!state) {
      return null;
    }
    const parsedData = JSON.parse(state);


    reqHeader.append('Content-Type', 'application/json');
    reqHeader.append('Access-Control-Allow-Origin', '*');
    reqHeader.append('Access-Control-Allow-Methods', 'POST');
    reqHeader.append("Authorization", `Bearer ${parsedData.response.token}`);

    return reqHeader;
  }


  async fetchAllOrders() {
    // const authReqHeader = this.authenticatedRequestHeader();
    const reqHeader = new Headers();

    var state = sessionStorage.getItem("data")


    const parsedData = JSON.parse(state);

    axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTU4MzAxMjU5MSwiZXhwIjoxNTgzMDk4OTkxfQ.vmIVlfMerhZ2UiwIhF7GVJgCaCEFSC2U114ECyaVAms';
    axios.defaults.headers.post['Content-Type'] = 'application/json';



    // reqHeader.append('Content-Type', 'application/json');
    // reqHeader.append('Access-Control-Allow-Origin', '*');
    // reqHeader.append('Access-Control-Allow-Methods', 'GET');
    // reqHeader.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTU4MzAxMjU5MSwiZXhwIjoxNTgzMDk4OTkxfQ.vmIVlfMerhZ2UiwIhF7GVJgCaCEFSC2U114ECyaVAms');

    // return this.http.get<any>(this.getAllOrdersUrl)
    // .pipe(map(orders => {
    //   return {
    //     ...orders
    //   }
    // }))


    console.log('reqHeader')
    await axios({ method: 'GET', url: this.getAllOrdersUrl })
      .then(res => {
        console.log(res)
      }).catch(error => console.log(error))

  }

}
