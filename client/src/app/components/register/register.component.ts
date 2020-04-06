import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import User from 'src/app/model/User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  c_hide = true;



  validation = {
    username: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    fullname: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    cpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    phoneno:  new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(14)
    ]),
    bestfood: new FormControl('', [
      Validators.required
    ]),
  }

  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    var state = sessionStorage.getItem("userLoggedIn");
    
    if(state) {
      console.log(state)
      return this.router.navigate(["/auth/dash"])
    }
  }

 async register(event) {
  const request:  User = {
    username: this.validation.username.value,
    email: this.validation.email.value,
    fullname: this.validation.fullname.value,
    password: this.validation.password.value,
    phoneno: this.validation.phoneno.value,
    bestfood: this.validation.bestfood.value,
    roles: "USER"
  }

  console.log(request)
   event.preventDefault()
console.log(this.validation.password.value)
console.log(this.validation.cpassword.value)
  if(this.validation.password.value != this.validation.cpassword.value) {
    alert("password do not match")
    return;
  }


  const res =  await this.authService.registerUser(request);
  if(res.response != null) {
    const response = await this.authService.loginUser({username: request.username, password: request.password });
    if(response.response != null) {
      await this.authService.setUserInfo(response);
      this.router.navigate(['auth/dash'])
      return;
    }
    this.router.navigate([''])
    return;
}else {
  alert("something is wrong")
}
    
  }

}
