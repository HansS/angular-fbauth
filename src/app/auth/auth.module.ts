import { authRoutes } from './auth.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RouterModule } from '@angular/router';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

import { FirebaseAuthService } from './firebase-auth.service';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes)
  
  ],
  declarations: [
  AuthComponent, 
  LoginComponent, 
  RegisterComponent, 
  LoginFormComponent, 
  RegisterFormComponent, 
  SignupComponent, EmailComponent],
  exports: [RouterModule, AuthComponent],
  providers: [FirebaseAuthService]
})
export class AuthModule { }
