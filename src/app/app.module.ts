import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ConfigService } from 'src/services/Config.service';
import { movieService } from 'src/services/Movie.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

const appInitializerFn = (appConfig: ConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'}
    ])
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializerFn, multi: true, deps: [ConfigService] },
    ConfigService,
    movieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
