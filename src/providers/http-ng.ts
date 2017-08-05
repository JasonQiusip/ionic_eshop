import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { LoadingController,Loading,ToastController  } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import { Observable } from 'rxjs/Observable';
import { StorageService } from "./storage-service";
import { Dialogs } from '@ionic-native/dialogs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';

@Injectable()
export class HttpNg{

    APP_SERVER_URL: string = "http://www.fsd1688.com";
    TIME_OUT:number = 30000;
    data:any;
    goodData:any;
    key:string;
    constructor(
        private http: Http,
        public loadingCtrl: LoadingController ,
        public dialogs: Dialogs,
        public storageService:StorageService,
        public toastCtrl: ToastController
        ) {
        //this.local = new Storage(LocalStorage);
    }

    loadHomeData(uri: string):any{
        //let url: string = `${this.APP_SERVER_URL}/${uri}`; 
        let url:string = 'assets/data/data.json';
        return this.get_method(url);
    }

    loadGoodDetail(uri:string):any{
        let url:string = 'assets/data/good.json';
        return this.http.get(url).timeout(this.TIME_OUT)
            .map((data)=>{
                console.log('loadGoodDetail');
                return data.json();
            })
            .finally(() => console.log("end"));
    }

    get_method(url:string):any{
        if(this.data)
        {
            return Observable.of(this.data);
        }else{
            console.log('httpget');
            return this.http.get(url).timeout(this.TIME_OUT)
            .map((data1)=>{
                console.log('processData11');
                this.data = data1.json();
               
                return this.data;
            })
            .finally(() => console.log("end"));
        }
    }

    processHomeData(data:any){
        console.log('processData');
        this.data = data.json();
        for(this.key in this.data.info)
        {
            console.log(this.key);
        }
    }

    get<T>(uri: string) : Promise<T>
    {
        let url: string = `${this.APP_SERVER_URL}/${uri}`; 
        return this.http.get(url).timeout(this.TIME_OUT).toPromise()
            .then(res => res.json() as T);
    }

    post<T>(uri: string, body: any) : Promise<void | T>
    {
        let url: string = `${this.APP_SERVER_URL}/${uri}`; 
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body).timeout(this.TIME_OUT).toPromise()
            .then(res => res.json() as T)
            .catch(err => {
                this.handleError(err);
            });
    }

    public handleError(error: Response) {
        this.alert("提示",error.toString());
        return Observable.throw(error.json().error || 'Server Error');
    }

    public alert(msg:string,title?:string) {
        if(title==null) title='提示';
        this.dialogs.alert(msg,title);
    }

     public loading():Loading{
       let loader = this.loadingCtrl.create({
				spinner:"dots",
				content:"加载中...",
				dismissOnPageChange:true, // 是否在切换页面之后关闭loading框 
				showBackdrop:false //是否显示遮罩层
			});
        return loader;
    }
}