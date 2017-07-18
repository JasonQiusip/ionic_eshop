import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
//import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
    templateUrl:'gooddetail.html'
})

export class GoodDetailPage{

      public goodNumb:number = 1;
      public totalPrice:number = 0;
      public stock:number = 999;
      public comment_count:number = 0;
      goodImgs=[
        {
           img_path: "http://39.108.10.118/mobile/data/afficheimg/1498344551837756379.jpg"
        },
        {
           img_path: "http://39.108.10.118/mobile/data/afficheimg/1498344551837756379.jpg"
        },
        {
           img_path: "http://39.108.10.118/mobile/data/afficheimg/1498344551837756379.jpg"
        },
    ];

    constructor(public navCtrl: NavController){
      //  iab.create('http://fsd1688.com/mobile/goods.php?id=86').show();
    }

    addEvent(e){
        this.goodNumb++;
        this.totalPrice = 3600 * this.goodNumb;
        this.stock--;
    }

    deductEvent(e){
        if(this.goodNumb > 1)
        {
            this.goodNumb--;
            this.totalPrice = 3600 * this.goodNumb;
            this.stock++;
        }
    }
}