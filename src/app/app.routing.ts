import { FirebaseAuthService } from './auth/firebase-auth.service';
import { MembersComponent } from './members/members.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'members', component: MembersComponent, canActivate: [FirebaseAuthService]},
    {path: 'auth', component: AuthComponent}
]