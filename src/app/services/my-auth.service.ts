import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'


@Injectable({
  providedIn: 'root'
})
export class MyAuthService {

  constructor( private router:Router, private afAuth:AngularFireAuth) { }

  get user(){
    return this.afAuth.auth.currentUser;//?
  }

  register(email:string, password:string){
    console.log('auth service is reached')
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email:string, password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login'])
    })
    .catch((error:Error)=> {
      console.log(error);
      throw error
    })
  };
}

