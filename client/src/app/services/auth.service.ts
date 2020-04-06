import { map } from 'rxjs/operators';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../model/User';
import axios from 'axios';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


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
  private tokenExpirationTimer: any;


constructor(
  private http: HttpClient,
  private router: Router,  
  ) {  }

  authenticatedRequestHeader: any = () => {
    const reqHeader = new Headers();

    var state = sessionStorage.getItem("data")

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
     //
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

setUserInfo(data) {
  const expirationDate = new Date(new Date().getTime() + data.response.expiresIn * 1000);
  console.log("setting user info", expirationDate)
  sessionStorage.setItem("userLoggedIn", JSON.stringify(true));
  sessionStorage.setItem("data", JSON.stringify(data))
  sessionStorage.setItem("expireMs", JSON.stringify(expirationDate) );

  this.user =  data;
}

getUserInfo() {
  return this.user;
}


autoLogout(expirationDuration: number) {
 this.tokenExpirationTimer = setTimeout( () => this.logout()  , expirationDuration)
}

// autoLogin() {
//   if(sessionStorage.get)
// }




logout() {
  sessionStorage.clear()
  this.loginState2.next(false)
  this.router.navigate(["/"])
  if(this.tokenExpirationTimer) {
    clearTimeout(this.tokenExpirationTimer)
  }
  this.tokenExpirationTimer = null;
}

}