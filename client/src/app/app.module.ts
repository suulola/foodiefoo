import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatInputModule, 
  MatFormFieldModule,
  MatIconModule
} from '@angular/material'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import   { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
       { path: "", component: LandingComponent},
       { path : "register", component: RegisterComponent},
       { path : "login", component: LoginComponent},
       {
         path:"auth",
         loadChildren: () => import('./components/authuser/authuser.module')
         .then(m => m.AuthuserModule)
       }
    ]),
    BrowserAnimationsModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
