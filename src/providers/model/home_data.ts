import {GoodInfo} from './goods';
import {CategoryInfo} from './cat_info'; 

export class GoodCategory{
    data_info:GoodInfo[];
    cat_info:CategoryInfo[];
}

export class HomeData{
    result:string;
    msg:string;
    info:GoodCategory;

}