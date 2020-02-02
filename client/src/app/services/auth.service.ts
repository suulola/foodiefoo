import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../model/User';
import {map} from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = ``;

constructor(private http: HttpClient) {  }

loginUser(username, password) {
  return new User()
  // const user: User = 
  // return this.http.post<any>(this.url, {
  //   username, password    
  // })
  // .pipe(map(user => {
  //   return user
  // }))
}

}
 