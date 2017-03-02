import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
//import { FirebaseAuthState} from 'firebase';

import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  name: any;
  state = '';

  constructor(public fire: AngularFire, private router: Router) { 

    this.fire.auth.subscribe( auth => {
      if(auth){
        this.name = auth
      }
    });
  }

  logout(){
    this.fire.auth.logout();
      console.log('loggout');
      this.router.navigate(['/auth']);
    }
  

  ngOnInit() {
  }

}
