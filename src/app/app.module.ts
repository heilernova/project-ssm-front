import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './services/api.interceptor';


import es_CO  from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
import { BodyModule } from './shared/body/body.module';
import { NovaModule } from 'ng-nova';
import { PersonModule } from './components/person/person.module';
import { AuthModule } from './components/auth/auth.module';
import { MatMenuModule } from '@angular/material/menu';
registerLocaleData(es_CO, 'es')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BodyModule,
    HttpClientModule,
    NovaModule,
    PersonModule,
    AuthModule,
    MatMenuModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi:true },
    { provide: LOCALE_ID, useValue:'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
