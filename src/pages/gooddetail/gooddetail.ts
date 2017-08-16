import {Component} from '@angular/core';
import {IonicPage,  NavController, NavParams, ViewController } from 'ionic-angular';
import {HttpNg} from '../../providers/http-ng';
@Component({
    templateUrl:'gooddetail.html'
})

export class GoodDetailPage{

      public goodNumb:number = 1;
      public totalPrice:number = 0;
      public stock:number = 999;
      public comment_count:number = 0;
      public goodId:any;
      public goodInfo:any;
      public goodIntro:string;
      
    constructor(private httpNg:HttpNg, 
        public navCtrl: NavController, 
        public navParams:NavParams,
        public viewCtrl: ViewController
    ){
    }

    ionViewWillEnter(){

        this.goodId = this.navParams.data.goodId;
        console.log("good id = "+this.goodId);
        let uri:string = "app/api.php?act=search_goods_detail&goods_id="+this.goodId;
        this.httpNg.loadGoodDetail(uri).subscribe(
            data =>{
                console.log("dataInfo = " + data.info['data_info'].goods_id);
                this.goodInfo = data.info['data_info'];
                let intro = this.goodInfo.intro;
                this.goodIntro = intro.replace(/\/images/g, "http://www.fsd1688.com/images");
                console.log(this.goodIntro);
            },
            error => console.log(error)
        );
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
    dismiss() {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss();
    }

    buy(){
        
    }

    addToCart(){

    }

    gotoBasket(){
        
    }
}