import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyModule } from './body/body.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './services/api.interceptor';
import { NovaModule, NvApiInterceptor } from 'ng-nova';
import { CellphonePipe } from './pipes/cellphone.pipe';

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
    NovaModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi:true},
    // {provide:HTTP_INTERCEPTORS, useClass: NvApiInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
