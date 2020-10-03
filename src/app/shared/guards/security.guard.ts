import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthSecurityGuard implements CanActivate {

    constructor(private _router: Router) { }

        canActivate() {
       
        this._router.navigate(['/login']);
        return false;
         //sessionStorage.clear();
         /*console.log("Entra al AuthSecurityGuard ")
         if (this.sessionService.getItem('access_token')) {
             return true;
         }*/
    }
}
