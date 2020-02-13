import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  c_hide = true;
  email: any;
  password: any;

  validation = {
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    name: new FormControl('', [
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
      Validators.maxLength(13)
    ]),
    bestfood: new FormControl('', [
      Validators.required
    ]),
  }

  constructor() { }

  ngOnInit() {
  }

  register() {}

}
