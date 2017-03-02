import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  state = '';
  error: any;

  constructor(public fire: AngularFire, private router: Router) { }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.fire.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/members'])
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }

  ngOnInit() {
  }

}
