import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatInputModule, 
  MatFormFieldModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material'


import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import   { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { LoginModule } from './components/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlimLoadingBarModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule,
    MatDialogModule,
    RouterModule.forRoot([
       {path: "", pathMatch: 'full', redirectTo: '/login'},
       { path: "landing", component: LandingComponent},
       { path : "register", component: RegisterComponent},
       { path : "login", loadChildren: () => import('./components/login/login.module')},
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
