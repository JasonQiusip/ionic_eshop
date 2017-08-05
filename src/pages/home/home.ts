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
           img_path: "assets/img/ad_1.png"
        },
        {
           img_path: "assets/img/ad_1.png"
        },
        {
           img_path: "assets/img/ad_1.png"
        },
    ];

  catTitles = [];
  cats = [];
  
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

  gotoDetailPage(good:any){
    this.navCtrl.push(GoodDetailPage, {goodId:good.id});
  }

  buildWholePath(imgPath:string):string{

      return this.imgPrefix+imgPath;
  }

  ionViewDidLoad(){
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
                    {
                      console.log(data.info[key].goods);
                      this.catTitles.push(key);
                      if(data.info[key].goods.length >= 6)
                      {
                        this.cats.push(data.info[key].goods.slice(0, 6));                                
                      }
                    }
                }
            },
            error => console.log(error)
    );
  }

}
