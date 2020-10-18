import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import UtlStorage from '../utils/storage.util';
import { IAuth, IMenuItem } from '../models/auth.interface';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/app.config';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpParams, HttpClientModule, HttpClient } from '@angular/common/http';
import { RequestService, RequestHeader, ResponseService } from '../models/main.model';
import { tap, map, catchError, finalize } from 'rxjs/operators';
import { CombineLatestSubscriber } from 'rxjs/internal/observable/combineLatest';

@Injectable()
export class CommonService {

  constructor(private _http: HttpClient, private _loaderService: LoaderService, private _router: Router) { }

  /**
   * Metodo para mostrar el loader
   */
  public showLoader(): void {
    this._loaderService.show();
  }

  /**
   * Metodo para ocultar el loader
   */
  public hideLoader(): void {
    this._loaderService.hide();
  }

  /**
   * Metodo para guardar todas la variables de session necesarias en el storage
   * @param authResponse 
   */
  static setStorageSession(authResponse: IAuth): void {
    UtlStorage.set('access_token', authResponse.access_token);
    UtlStorage.set('refresh_token', authResponse.refresh_token);
    UtlStorage.set('token', JSON.stringify(authResponse));
    UtlStorage.set('menu', authResponse.menu);
    UtlStorage.set('authorities', authResponse.authorities);
    UtlStorage.set('username', authResponse.username);
    UtlStorage.set('system', authResponse.system);
  }

  static clearStorageSession(): void {
    UtlStorage.delete('access_token');
    UtlStorage.delete('refresh_token');
    UtlStorage.delete('token');
    UtlStorage.delete('menu');
    UtlStorage.delete('authorities');
    UtlStorage.delete('username');
    UtlStorage.delete('system');
    console.log('Se borra el clean storage');
  }

  /**
   * Metodo estatico para obtener el token bearer de la session del usuario
   */
  static getTokenSession(): string {
    let token: string = null;
    if (UtlStorage.get('access_token')) {
      token = 'bearer ' + UtlStorage.get('access_token');
    }
    return token;
  }

  /**
   * Metodo para recuperar el Menu de la Session
   */
  getMenuSession(): any[] {
    let model: any[] = JSON.parse(UtlStorage.get('menu'));
    
    let model2: any[];
    
    
    for(let result of model){
      let o: any;
      console.log(result.label);
   }

    console.log('abc ', model);

    return model2;
    /*
    if (!UtlStorage.get('access_token')) {
      //Recuperamos los privilegios del sessionStorage        
      let model: any = JSON.parse(UtlStorage.get('menu'));
      console.log(model);
      return model;
    }else {
      this._router.navigate([AppConfig.WEB_CLIENT_DEFAULT_PAGE_ERROR]);
    }*/
  }

  /**
   * Permite setear un formgroup con los valores genericos de una entidd desde un entinty (dto) 
   * @param anyForm 
   * @param dto 
   */
  static setFormGroupByGenericParameters(anyForm: FormGroup, dto: any) {
    anyForm.controls['id'].setValue(dto.id);

    anyForm.controls['eliminado'].setValue(dto.eliminado);

    anyForm.controls['fecha'].setValue(dto.fecha);
    anyForm.controls['terminal'].setValue(dto.terminal);
    anyForm.controls['usuarioId'].setValue(dto.usuarioId);
    anyForm.controls['usuarioDesc'].setValue(dto.usuarioDesc);

    anyForm.controls['fechaCreacion'].setValue(dto.fechaCreacion);
    anyForm.controls['terminalCreacion'].setValue(dto.terminalCreacion);
    anyForm.controls['usuarioCreacionId'].setValue(dto.usuarioCreacionId);
    anyForm.controls['usuarioCreacionDesc'].setValue(dto.usuarioCreacionDesc);

  }

  /**
   * Metodo para invocar un web service de tipo GET
   * @param url api del servicio que se desea invocar
   * @param request respuesta del servicio observable<any>
   */
  public get(url: string, request: RequestService): Observable<any> {
    this.showLoader();
    Response
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': CommonService.getTokenSession()
    });


    let params = new HttpParams();
    params = params.append('pge', JSON.stringify(request));
    //let body = params.toString();
    return this._http.get(AppConfig.WEB_SERVER_API + url, { headers, params })
      .pipe( map(res => res)
      , catchError(err => this.catchError(err))
      , finalize(() => {
          this.hideLoader();
      }
      ));
  }

  /**
   * Metodo que captura el error al invocar un servicio
   * @param err 
   */
  public catchError(error: Response | any): Observable<any> {

    let message: string;
    if (error.status === 0) {
        message = "Servidor no accesible";
    } else {
        if (error instanceof Response) {
            let cast:any = error.json();
            if (cast.message)
                message = cast.message;
            else
                message = cast.error_description;
        }
    }
    return throwError(message);
}

  /**
   * Metodo para invocar un web service de tipo POST
   * @param url api del servicio que se desea invocar
   * @param request respuesta del servicio observable<any>
   */
  public post(url: string, request: RequestService): Observable<any> {
    this.showLoader();
    Response
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': CommonService.getTokenSession()
    });


    let params = new HttpParams();
    params = params.append('pge', JSON.stringify(request));
    //let body = params.toString();
    return this._http.post(AppConfig.WEB_SERVER_API + url, params.toString(), { headers })
      .pipe(tap(response => response));
  }

  /**
   * Metodo para invocar un web service de tipo PUT
   * @param url api del servicio que se desea invocar
   * @param request respuesta del servicio observable<any>
   */
  public put(url: string, request: RequestService): Observable<any> {
    this.showLoader();
    Response
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': CommonService.getTokenSession()
    });


    let params = new HttpParams();
    params = params.append('pge', JSON.stringify(request));
    //let body = params.toString();
    return this._http.put(AppConfig.WEB_SERVER_API + url, params.toString(), { headers })
      .pipe(tap(response => response));
  }

  /**
   * Metodo para invocar un web service de tipo DELETE
   * @param url api del servicio que se desea invocar
   * @param request respuesta del servicio observable<any>
   */
  public delete(url: string, request: RequestService): Observable<any> {
    this.showLoader();
    Response
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': CommonService.getTokenSession()
    });


    let params = new HttpParams();
    params = params.append('pge', JSON.stringify(request));
    //let body = params.toString();
    return this._http.delete(AppConfig.WEB_SERVER_API + url, { headers, params })
      .pipe(tap(response => response));
  }

  /**
   * Se obtiene el periodo de una fecha especifica en formato YYYYMM
   * @param fecha Fecha de que se tiene que obtener el parametro
   */
  public getPeriodo(fecha: Date): number {
    if (!fecha) { // Si es nula la fecha
        fecha = new Date();
    }

    let yyyy = fecha.getFullYear();
    let mm = fecha.getMonth() + 1;
    let yyyymm: string = yyyy.toString();

    if (mm < 10) {
        yyyymm = yyyymm + '0' + mm.toString();
    } else {
        yyyymm = yyyymm + mm.toString();
    }

    return parseInt(yyyymm);
}

  /**
   * Obtiene la instancia de un Request Service
   */
  static newInstanceRequestService() : RequestService{
    let header = new RequestHeader();
    let req = new RequestService();
    req.header = header;
    req.data = '{}'

    return req;
  } 



}