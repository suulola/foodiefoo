import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { 
  FormControl,
  FormGroup, 
  Validators, 
  FormBuilder
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imgUrl : String = "https://www.graphicsprings.com/filestorage/stencils/58cd11a3bb897bb7e2ed6de306ce1b69.png?width=500&height=500";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {  }

  hide = true;
  email: any;
  password: any;

  validation = {
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.min(6)
    ])
  }

  login = () =>  {
    let data = new FormData();
    data.append('email', this.email);
    data.append('password', this.password);

    this.router.navigate(['auth/dash'])
    
    console.log("hi")
    this.authService.loginUser(this.email, this.password)

    
    console.log(data)
    console.log("hd")
  }

  // loginValidation: FormGroup = new FormGroup({
  //   email: new FormControl('', [
  //     Validators.email,
  //     Validators.required
  //   ]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.min(3)
  //   ])
  // })



}
