import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedDataModule } from './shared-data/shared-data.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './shared-data/core/core.module';
import { IonicStorageModule } from '@ionic/storage';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
   
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    
    IonicStorageModule.forRoot(),
    CoreModule,
    
  ],
  providers: [
    
    HTTP,
    FileChooser,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
