import {Component} from '@angular/core';
import {TabsPage} from '../tabs/tabs';
import {NavController} from 'ionic-angular'

@Component({
    templateUrl:'introslides.html'
})

export class IntroSlidesPage{

    constructor(public navCtrl: NavController){}

    slides=[
        {
            title: "welcome to fsd",
            description:"awesome place to shopping",
        },
        {
            title: "welcome to fsd1",
            description:"awesome place to shopping",
        },
        {
            title: "welcome to fsd2",
            description:"awesome place to shopping",
        },
    ];

    openHomePage()
    {
        this.navCtrl.push(TabsPage);
    }
}