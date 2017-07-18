import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SignUpPage} from '../signup/signup';

@Component({
    templateUrl:'login.html'
})

export class LoginPage{

     constructor(public navCtrl: NavController){}

     loginUsr()
     {

     }

     gotoSignUpPage()
     {
        this.navCtrl.push(SignUpPage);
     }
}