import { map } from 'rxjs/operators';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../model/User';
import axios from 'axios';
import { Subject } from 'rxjs';

//  new Date(new Date().getTime() + +86400000 *1000)

interface Response {
  response: any;
  error: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  // loginStatus= new EventEmitter<boolean>();
  loginState2 = new Subject<boolean>();


  loginUrl: string = `http://localhost:8080/auth/signin`;
  registerUrl: string = `http://localhost:8080/auth/signup`;
  getAllOrdersUrl: string = `http://localhost:8080/orders/`


constructor(
  private http: HttpClient,
  
  ) {  }

  authenticatedRequestHeader: any = () => {
    const reqHeader = new Headers();

    var state = localStorage.getItem("data")

    if(!state) {
      return null;
    }
    const parsedData = JSON.parse(state);


  reqHeader.append('Content-Type', 'application/json');
  reqHeader.append('Access-Control-Allow-Origin', '*');
  reqHeader.append('Access-Control-Allow-Methods', 'POST');
  reqHeader.append("Authorization", `Bearer ${parsedData.response.token}`);

  return reqHeader;
  }

async loginUser(user: User) {

  const reqHeader = new Headers();
  reqHeader.append('Content-Type', 'application/json');
  reqHeader.append('Access-Control-Allow-Origin', '*');
  reqHeader.append('Access-Control-Allow-Methods', 'POST');

  const resp: Response = { response: null, error: null };

 await axios({method: 'POST', url: this.loginUrl, data: user, headers: reqHeader, withCredentials: true})
 .then(response => {
  console.log("this is the res from axios", response)
   if(response.status != 200 && response.status != 201) {
     resp.error = response.data
   }else {
    // this.isUserLoggedIn = true;
     resp.response = response.data
   }
 }).catch(error => {
   if(error == null) {
     return resp.error = 'NETWORK ERROR';
   }

   if(error.response != null ) {
     resp.error = error.response
   }else {
     resp.error = error;
   }

 })

  return resp;
}


async registerUser(user: User) {

  const reqHeader = new Headers();
  reqHeader.append('Content-Type', 'application/json');
  reqHeader.append('Access-Control-Allow-Origin', '*');
  reqHeader.append('Access-Control-Allow-Methods', 'POST');

  const resp = { response: null, error: null };

 await axios({method: 'POST', url: this.registerUrl, data: user, headers: reqHeader, withCredentials: true})
 .then(response => {
  console.log("this is the res from axios", response)
   if(response.status != 200 && response.status != 201) {
     resp.error = response.data
   }else {
    // this.isUserLoggedIn = true;
     resp.response = response.data
   }
 }).catch(error => {
   if(error == null) {
     return resp.error = 'NETWORK ERROR';
   }

   if(error.response != null ) {
     resp.error = error.response
   }else {
     resp.error = error;
   }

 })

  return resp;
}

async fetchAllOrders() {
  // const authReqHeader = this.authenticatedRequestHeader();
  const reqHeader = new Headers();

  var state = localStorage.getItem("data")

  const parsedData = JSON.parse(state);


reqHeader.append('Content-Type', 'application/json');
reqHeader.append('Access-Control-Allow-Origin', '*');
reqHeader.append('Access-Control-Allow-Methods', 'GET');
reqHeader.append("Authorization", `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvc3V1bG9sYSIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTU4MTk1OTczOSwiZXhwIjoxNTgyMDQ2MTM5fQ.2WUAPIEQ6jbasHBkUgWJU2mL9LRcdybWT6BOWbOn6Sw`);

  // return this.http.get<any>(this.getAllOrdersUrl)
  // .pipe(map(orders => {
  //   return {
  //     ...orders
  //   }
  // }))
  console.log(reqHeader)
  await axios({method: 'GET', url: this.getAllOrdersUrl, headers: reqHeader,  withCredentials: true })
  .then(res => {
    console.log(res)
  }).catch(error =>  console.log(error) )

}

setUserInfo(data) {
  console.log("setting user info", data)
  localStorage.setItem("userLoggedIn", JSON.stringify(true));
  localStorage.setItem("data", JSON.stringify(data))

  
  this.user =  data;
}

getUserInfo() {
  return this.user;
}

}