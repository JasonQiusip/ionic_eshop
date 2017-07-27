import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GoodDetailPage} from '../gooddetail/gooddetail';
import {BrowserPage} from '../browser/browser';
import {HomeService} from '../../providers/home-service';
import {GoodCategory} from '../../providers/model/home_data';
import {HttpNg} from '../../providers/http-ng';
import {HomeData} from '../../providers/model/home_data'
import {GoodInfo} from '../../providers/model/goods'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public homeData:HomeData;
  public imgPrefix:string = "http://www.fsd1688.com/";
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

  cat_1:GoodInfo[] = [];

  constructor(public navCtrl: NavController, 
    private homeService:HomeService, 
    public httpNg:HttpNg) {

  }

  gotoGoodDetail(id:string){
    this.navCtrl.push(BrowserPage, {
                browser: {
                    title: '商品详情',
                    url: 'http://www.fsd1688.com/app/goods.php?id=86'
                }
            });

    // this.navCtrl.push(GoodDetailPage);
    
  }

  ionViewLoaded(){
    console.log("ionViewLoaded");
   this.loadHomePageData();
  }

  loadHomePageData()
  {
    console.log("load data");
    this.httpNg.get<JSON>("app/api.php?act=search_goods_list")
            .then(res=>{
              console.log("load data success");
                //this.homeData = homeData;
                //this.cat_1 = homeData['info']['data_info'];
                console.log(res['info']);
            }).catch(err => {
                this.httpNg.handleError(err);
            });
  }

}
