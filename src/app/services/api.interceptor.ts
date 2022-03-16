import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NvMessageBoxService } from 'ng-nova';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private _message:NvMessageBoxService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let url:string = request.url;
    
    if (environment.urlAPI){
      if (!url.match(/^http(s)?:\/\/(.*)$/)){
        url = `${environment.urlAPI}/${url}`;
      }
    }
    
    let requestClone:HttpRequest<unknown> = request.clone({url});
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
              throw new HttpErrorResponse({error: body.message, url: event.url ?? '', status: event.status});
            }
          }
        }

        return event;
      }),catchError((e:HttpErrorResponse)=>{
        
        let text:string = "Error inesperado";
        let messageApi = this.getMessage(e.error);

        if (messageApi){
          if (messageApi.content.length > 0){
            // Aquí el codigo par al manejo del mesaje del servidror.
            this._message.error(messageApi.content, messageApi.title);
          }
        }else{
          if (e.status >= 500){
            if (typeof e.error == 'object'){
              text = e.message;
              this._message.error(text, "Error con la petición HTTP");
              
            }else if (typeof e.error == "string"){
              text = e.error;
              this._message.errorServer(text, "Error con la petición HTTP");
            }
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
