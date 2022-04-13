import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NvMessageBoxService } from 'ng-nova';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private _message:NvMessageBoxService,
    private _login:LoginService,
    private _router:Router,
    private _user:UserService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let url:string = request.url;
    
    if (environment.urlAPI){
      if (!url.match(/^http(s)?:\/\/(.*)$/)){
        url = `${environment.urlAPI}/${url}`;
      }
    }

    let headers = new HttpHeaders({
      "ssm-access-token" : this._login.getToken()
    })

    
    
    let requestClone:HttpRequest<unknown> = request.clone({url, headers});

    return next.handle(requestClone).pipe(
      map((event:HttpEvent<any>)=>{

        if (event instanceof HttpResponse){
          let body = event.body;
          
          let data:any = JSON.parse(event.headers.get('nv-data') ?? "{}");
          console.log(data);
          if (data.systemMessage){
            if (data.systemMessage.content){
              this._message.alert(data.systemMessage.content, "");
            }
          }
          
          if (body == null){
            throw "Api NULL";
          }
        }

        return event;
      }),catchError((e:HttpErrorResponse)=>{
        
        if (e.status == 401){
          this._message.alert("Por favor inicie sesión nuevamente", "Credenciales invalidas",{ disableClose:true }).afterClosed().subscribe(
            res=>{
              this._user.auth();
            }
          );
        }
        if (e.status >= 500){
          let text:string = "Error inesperado";
          if (typeof e.error == 'object'){
            text = e.message;
            this._message.error(text, "Error con la petición HTTP");
            
          }else if (typeof e.error == "string"){
            text = e.error;
            console.log(e.error);
            this._message.errorServer(text, "Error con la petición HTTP");
          }
        }
        
        return throwError(()=>e);
      })
    );
  }

}
