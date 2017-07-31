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

  wines=[];
  diamonds=[];
  teas=[];
  watercleaners=[];
  jades=[];

  wineTitle:string="名酒系列";
  diamondTitle:string="蓝宝石系列";
  teaTitle:string="精品茶叶系列";
  watercleanerTitle:string="净水器系列";
  jadeTitle:string="玉石系列";
  
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

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
   this.loadHomePageData();
  }

  loadHomePageData()
  {
    console.log("load data");
    let key:string = "";
    this.httpNg.loadHomeData('app/api.php?act=search_goods_list').subscribe(
                    data => {
                        for(key in data.info)
                        {
                            console.log(key);
                            if(key != 'counts')
                            console.log(data.info[key].goods);
                            if(key == this.wineTitle)
                            {
                              this.wines = data.info[key].goods;
                            }
                            if(key == this.diamondTitle)
                            {
                              this.diamonds = data.info[key].goods;
                            }
                            if(key == this.teaTitle)
                            {
                              this.teas = data.info[key].goods;
                            }
                            if(key == this.watercleanerTitle)
                            {
                              this.watercleaners = data.info[key].goods;
                            }
                            if(key == this.jadeTitle)
                            {
                              this.jades = data.info[key].goods;
                            }
                        }
                    },
                    error => console.log(error)
            );
    // this.httpNg.get<JSON>("app/api.php?act=search_goods_list")
    //         .then(res=>{
    //           console.log("load data success");
    //             //this.homeData = homeData;
    //             //this.cat_1 = homeData['info']['data_info'];
    //             console.log(res['info']);
    //         }).catch(err => {
    //             this.httpNg.handleError(err);
    //         });
  }

}
