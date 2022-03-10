import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AttentionCommunityInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // let url:string = request.url;
    

    // if (!url.match(/^http(s)?:\/\/(.*)$/)){
    //   url = `attention-community/${url}`;
    // }
    
    console.log("Interceptor 2");

    // let requestClone:HttpRequest<unknown> = request.clone({url});
    return next.handle(request);
  }
}
