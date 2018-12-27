import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserModule,
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    RouterModule.forRoot([
      //auth route
      {path: "", component: HomeComponent, canActivate: [AuthGuardService]},

      //non-auth route 
      
      {path: "login", component:LoginComponent},
      {path: "register", component: RegisterComponent}
    ])
  ],

  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    
  ],
 
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
