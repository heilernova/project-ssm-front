import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyModule } from './body/body.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './services/api.interceptor';
import { NovaModule } from 'ng-nova';

import es  from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
registerLocaleData(es)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BodyModule,
    LoginModule,
    HttpClientModule,
    NovaModule,
    MatSelectModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi:true },
    { provide: LOCALE_ID, useValue:'es_CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
