import {
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse, HttpHeaders,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpUserEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoaderService } from 'src/app/services/loader.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) { }

  private showLoader(): void {
    this.loaderService.show();
  }

  //when we connect with actual backend we should remove setTimeout
  private hideLoader(): void {
    setTimeout(()=>this.loaderService.hide(), 2000)
  }


  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any> |
      HttpHeaderResponse |
      HttpProgressEvent |
      HttpResponse<any> |
      HttpUserEvent<any>> {
       this.showLoader();
    const authHeader = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'X-Tribes-Token': localStorage.getItem(environment.tribes_token),
      },
    });
    return next.handle(authHeader).pipe(tap(()=> this.hideLoader()));


    
  }
}
