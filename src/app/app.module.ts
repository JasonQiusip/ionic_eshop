import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {IntroSlidesPage} from '../pages/introslides/introslides';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LauncherPage } from '../pages/launcher/launcher';
import { LoginPage} from '../pages/login/login';
import { SignUpPage} from '../pages/signup/signup';
import { CategoryPage} from '../pages/category/category';
import { CartPage} from '../pages/cart/cart';
import { GoodDetailPage} from '../pages/gooddetail/gooddetail';
import { BrowserPage} from '../pages/browser/browser';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomeService} from '../providers/home-service';
import { HTTP, HTTPResponse } from '@ionic-native/http'

@NgModule({
  declarations: [
    MyApp,
    IntroSlidesPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LauncherPage,
    LoginPage,
    SignUpPage,
    CategoryPage,
    CartPage,
    GoodDetailPage,
    BrowserPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroSlidesPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LauncherPage,
    LoginPage,
    SignUpPage,
    CategoryPage,
    CartPage,
    GoodDetailPage,
    BrowserPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HTTP,
    HomeService,
  ]
})
export class AppModule {}
