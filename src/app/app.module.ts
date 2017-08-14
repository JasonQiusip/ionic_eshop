import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';
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
import { BrowserPopoverPage} from '../pages/browser/browser-popover';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Dialogs } from "@ionic-native/dialogs";
import {HomeService} from '../providers/home-service';
import {StorageService} from '../providers/storage-service';
import {HttpNg} from '../providers/http-ng';

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
    BrowserPopoverPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule
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
    HomeService,
    HttpNg,
    Dialogs,
    StorageService,
  ]
})
export class AppModule {}
