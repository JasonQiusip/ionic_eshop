import { Component } from '@angular/core';

@Component({
    selector:'page-category',
    templateUrl: 'category.html'
})

export class CategoryPage{

categories=[
        {
           img_path: "http://39.108.10.118/data/afficheimg/1498442361608740587.jpg",
           title: "蓝宝石系列",
           subtitle:"41",
        },
        {
           img_path: "http://39.108.10.118/data/afficheimg/1498442084080985809.jpg",
           title: "玉石系列",
           subtitle:"21",
        },
        {
           img_path: "http://39.108.10.118/data/afficheimg/1498503602782717301.jpg",
           title: "名酒系列",
           subtitle:"22",
        },
      
    ];
}
