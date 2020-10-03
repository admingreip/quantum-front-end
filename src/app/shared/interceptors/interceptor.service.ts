import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from '../services/common.service';

@Injectable({ providedIn: 'root' })
export class InterceptorService /*implements HttpInterceptor*/ {

  constructor(private _commonService: CommonService) {        
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this._commonService.getTokenSession()
    });

    const reqClone = req.clone({
      headers
    });



    return next.handle( reqClone ).pipe(
      catchError( this.manejarError )
    );


  }


  manejarError( error: HttpErrorResponse ) {
    console.log('Sucedió un error');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError('Error personalizado');
  }

}
