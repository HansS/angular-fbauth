import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: any;

  constructor(public fire: AngularFire, private router: Router) {
    this.fire.auth.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/auth');
      }
    });
  }

  loginFacebook(){

    this.fire.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {this.error = err;}
    )
}

  loginGoogle(){
    this.fire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then(
      (success) => {
        this.router.navigate(['/members']);
      }
    ).catch( (err) => {
      this.error = err;
    })
  }

  ngOnInit() {
  }


