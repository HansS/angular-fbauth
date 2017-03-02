import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  state = '';
  error: any;

  constructor(public fire: AngularFire, private router: Router) {
    this.fire.auth.subscribe( auth => {
      if(auth){
        this.router.navigate(['/members']);
      }
    });
   }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.fire.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }
      ).then(
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
