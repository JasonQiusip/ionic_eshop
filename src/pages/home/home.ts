import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GoodDetailPage} from '../gooddetail/gooddetail';
import {BrowserPage} from '../browser/browser';
import {HomeService} from '../../providers/home-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  adSlides=[
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

  bestRecommends=[
        {
           img_path: "http://39.108.10.118/images/201706/thumb_img/65_thumb_G_1498428274006.jpg",
           price:"11",
           title: ""
        },
        {
           img_path: "http://39.108.10.118/images/201706/thumb_img/65_thumb_G_1498428274006.jpg",
           price:"22",
           title: ""
        },
        {
           img_path: "http://39.108.10.118/images/201706/thumb_img/65_thumb_G_1498428274006.jpg",
           price:"32",
           title: ""
        },
      
    ];

  cat_1 = [
        {
           img_path: "http://39.108.10.118/images/201706/thumb_img/65_thumb_G_1498428274006.jpg",
           price:"22",
           title: ""
        },
        {
           img_path: "http://39.108.10.118/images/201706/thumb_img/64_thumb_G_1498428049202.jpg",
           price:"110",
           title: ""
        },
        {
           img_path: "http://39.108.10.118/images/201706/thumb_img/68_thumb_G_1498437641137.jpg",
           price:"98",
           title: ""
        },
      {
           img_path: "http://39.108.10.118/images/201706/thumb_img/65_thumb_G_1498428274006.jpg",
           price:"22",
           title: ""
        },
        {
           img_path: "http://39.108.10.118/images/201706/thumb_img/65_thumb_G_1498428274006.jpg",
           price:"110",
           title: ""
        },
        {
           img_path: "http://39.108.10.118/images/201706/thumb_img/65_thumb_G_1498428274006.jpg",
           price:"98",
           title: ""
        },
    ];

  constructor(public navCtrl: NavController) {

  }

  gotoGoodDetail(){
    this.navCtrl.push(BrowserPage, {
                browser: {
                    title: '商品详情',
                    url: 'http://www.fsd1688.com/mobile/goods.php?id=86'
                }
            });

    // this.navCtrl.push(GoodDetailPage);
  }

  loadHomePageData()
  {

  }

}
