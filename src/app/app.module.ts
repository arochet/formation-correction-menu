import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatService } from './service/plat.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ComponentModule } from './component/component.module';
import { PanierService } from './service/panier.service';

export const firebaseConfig = {
  apiKey: "AIzaSyAkFmxJ-lByjJVORRENE7NWwqHcg47tw6A",
  authDomain: "formation-alban-corr-menu.firebaseapp.com",
  projectId: "formation-alban-corr-menu",
  storageBucket: "formation-alban-corr-menu.appspot.com",
  messagingSenderId: "820091318296",
  appId: "1:820091318296:web:97e194f0c951429d2ed36d",
  measurementId: "G-7ZKWX3B3M0"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ComponentModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, PlatService, PanierService],
  bootstrap: [AppComponent],
})
export class AppModule {}
