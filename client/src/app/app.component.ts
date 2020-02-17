import { AuthService } from './services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, Router, Event } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Food App';
  isLoggedIn: boolean = false;
  private activatedSub: Subscription;

  private navigationInterceptor(event: Event): void {
    if(event instanceof NavigationStart) {
      this.loadingBar.start()
    }
    if(event instanceof NavigationEnd) {
      this.loadingBar.complete()
    }
    if(event instanceof NavigationCancel) {
      this.loadingBar.stop()
    }
    if(event instanceof NavigationError) {
      this.loadingBar.stop()
    }
  }
  constructor(
    private loadingBar: SlimLoadingBarService,
    private router: Router,
    private authService : AuthService
    ) {
     
      this.router.events.subscribe((event: Event) => {
        this.navigationInterceptor(event);

       
      })

    }

    ngOnInit() {

      this.activatedSub = this.authService.loginState2.subscribe(status => {
        this.isLoggedIn = status;
      })

      var state = localStorage.getItem("userLoggedIn");


      if(state) {
        console.log(state)
        this.authService.loginState2.next(true)
        return this.router.navigate(["/auth/dash"])
      }else {
        console.log("not logged in")
       return this.router.navigate([""])
      }
    }

    ngOnDestroy() {
      this.activatedSub.unsubscribe();
    }

    logout() {
      localStorage.removeItem("userLoggedIn");
      localStorage.removeItem("data");

      this.authService.loginState2.next(false)
      this.router.navigate(["/"])
    }


}
