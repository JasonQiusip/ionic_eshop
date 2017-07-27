import {Injectable} from '@angular/core';
import {HttpNg} from './http-ng';
import {HomeData} from './model/home_data'

@Injectable()
export class HomeService{
    
    constructor(public httpNg: HttpNg){}

    getHomeData(callback:Function)
    {
        
        
    }

    getBest()
    {

    }

    getCats()
    {

    }
}