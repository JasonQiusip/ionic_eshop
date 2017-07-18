import {Injectable} from '@angular/core';
import {HttpNg} from './http-ng';

@Injectable()
export class HomeService{
    
    constructor(public httpNg: HttpNg){}

    getHomeData()
    {
        this.httpNg.get("/api/index.php");
    }

    getBest()
    {

    }

    getCats()
    {

    }
}