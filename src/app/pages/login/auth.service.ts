import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedFlag = true;

  constructor() { }

  login(loginModel: LoginModel) {
    console.log(loginModel);
    this.isLoggedFlag = true;
  }


}
