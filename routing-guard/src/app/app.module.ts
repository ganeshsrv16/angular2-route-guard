import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FilterPipe } from './filter.pipe';
import { HighDirective } from './high.directive';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ServersComponent } from './servers/servers.component';

import {HttpClientModule} from '@angular/common/http';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { SComponent } from './s/s.component';

import { AlbumService } from './album.service';
import { HttpClient } from 'selenium-webdriver/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
ServersComponent,

    FilterPipe, HighDirective,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    SComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
   HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServersService,AlbumService, AuthService, AuthGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
