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

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { 
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() { 
    var state = localStorage.getItem("userLoggedIn");
    
    if(state) {
      console.log(state)
      return this.router.navigate(["/auth/dash"])
    }
   }

  hide = true;



  login = async () =>  {

    const data = this.form.value;

    console.log("data is", data)
    console.log("form validation", this.form)

    if(!this.form.valid) {
      alert("something is wrong")
      return;
    }

      const response = await this.authService.loginUser(data);
      console.log(response)
      if(response.response != null) {
        // this.authService.loginStatus.emit(true)
        this.authService.loginState2.next(true);
        this.form.reset();
        await this.authService.setUserInfo(response);
        this.router.navigate(['auth/dash'])
      }


  }

}
