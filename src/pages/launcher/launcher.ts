import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {IntroSlidesPage} from '../introslides/introslides';
import {TabsPage} from '../tabs/tabs';

@Component({
    templateUrl:'launcher.html'
})

export class LauncherPage{

    constructor(public navCtrl: NavController){}



    openIntroSlidesPage()
    {
        this.navCtrl.push(IntroSlidesPage);
    }

    openHomePage()
    {
        this.navCtrl.push(TabsPage);
    }

    openLoginPage()
    {
       // this.navCtrl.push();
    }

    autoDismissPage()
    {
        setTimeout(() => {
            this.openIntroSlidesPage();
        }, 100);
    }

    ionViewDidLoad()
    {
        this.autoDismissPage();
    }
}