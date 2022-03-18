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

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private _message:NvMessageBoxService,
    private _login:LoginService,
    private _router:Router
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
          let body = this.getBodyResponse(event.body);
          if (body){
            if (body.status){
              if (body.message.content.length > 0){
                this._message.show(body.message.content, body.message.title);
              }
              event = event.clone({body: body.data});
            }else{
              
              this._message.error(body.message.content, body.message.title);

              throw "Mensaje de la api " + url;
              // throw new HttpErrorResponse({error: body.message, url: event.url ?? '', status: event.status});
            }
          }else{
            if (event.body == null) throw "Api NULL";
          }
        }

        return event;
      }),catchError((e:HttpErrorResponse)=>{
        
        if (e.status == 401){
          this._message.alert("Por favor inicie sesión nuevamente", "Credenciales invalidas",{ disableClose:true }).afterClosed().subscribe(
            res=>{
              this._router.navigate(['/login']);
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
            this._message.errorServer(text, "Error con la petición HTTP");
          }
        }
        
        return throwError(()=>e);
      })
    );
  }

  private getMessage(data:any):{title:string, content:(string|string[])[], type:number}|null{
    try {
      if ('title' in data && 'content' in data && 'type' in data){
        return data;
      }else{
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  private getBodyResponse(data:any):{status:string, statusCode:number, message:{title:string, content:(string|string[])[], type:number}, data:any}|null{
    try {
      if ('status' in data && 'statusCode' in data && 'message' in data && 'data' in data){
        return data;
      }else{
        return null;
      }
    } catch (error) {
      return null;
    }
  }
}
