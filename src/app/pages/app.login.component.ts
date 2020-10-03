import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { AppConfig } from '../app.config';
import { Route, Router } from '@angular/router';
import { CommonService } from '../shared/services/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent implements OnInit {

  formLogin: FormGroup;
  appVersion: string;
  
  msgs = [];

  constructor(private _commonService:CommonService, private _router: Router, private _loginService: LoginService, private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.createForm();
    this.appVersion = AppConfig.WEB_CLIENT_VERSION;
  }

  createForm(): void {
    this.formLogin = this._formBuilder.group({
      'user': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }
  login() {
    if (this.formLogin.valid) {
      const user = this.formLogin.get('user').value;
      const password = this.formLogin.get('password').value;
      this._loginService.login(user, password)
        .subscribe(() => {
          this._router.navigate([AppConfig.WEB_CLIENT_DEFAULT_PAGE]);
        },
          error1 => {

          });
    }
  }


}
