import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule, MdCardModule } from '@angular/material';
import 'hammerjs';

import { AuthModule } from './auth/auth.module';
import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { firebaseConfig } from './../environments/firebase.config';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    AuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
