import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app.config';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IAuth } from '../models/auth.interface';
import { CommonService } from './common.service';

@Injectable()
export class LoginService {

    constructor(private _http: HttpClient,  private _router: Router, private _commonService:CommonService) {
       
    }

    /**Obtener el token con el usuario y el password */
    public login(username: string, password: string):  Observable<IAuth> {
        this._commonService.showLoader();

        
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': AppConfig.WEB_SERVER_AUTHORIZATION//'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA=='
        });


        let params = new HttpParams();
        params = params.append('username', username);
        params = params.append('password', password);
        params = params.append('grant_type', AppConfig.WEB_CLIENT_GRANT_TYPE);
        params = params.append('client_id', AppConfig.WEB_CLIENT_ID);
        let body = params.toString();

        return this._http.post<IAuth>(AppConfig.URL_GET_TOKEN, body, {headers})
        .pipe(tap(response => CommonService.setStorageSession(response)));
    }

    



   
}