import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginRoutes } from './login.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    LoginRoutes,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  declarations: [LoginRoutes.components]
})
export class LoginModule { }
