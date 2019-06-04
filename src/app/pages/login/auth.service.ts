import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/auth.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API } from './../../API';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedFlag = false;

  typeUser: string;

  user: any;
  jwThelper = new JwtHelperService();


  constructor(private http: HttpClient,
              private router: Router) {

    const token = this.getToken();
    console.log(token);
    if ( token === null) {
      this.isLoggedFlag = false;
      this.typeUser = undefined;
      this.user = undefined;
    } else {
      this.isLoggedFlag = true;
      this.typeUser = localStorage.getItem('type');
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  login(loginModel: LoginModel) {
    console.log(loginModel);
    this.http.post<any>(`${API}/auth/login`, loginModel).subscribe(
      result => {
        console.log(result);
        this.isLoggedFlag = true;
        this.typeUser = result.type;
        this.user = result.user;
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('token', result.token);
        localStorage.setItem('type', result.type);
      },
      error => {
        console.log('error de login');
      });
  }

  // login(loginModel: LoginModel) {
  //   console.log(loginModel);
  //   if (loginModel.username === 'admin') {
  //     this.isLoggedFlag = true;
  //     this.typeUser = 'adm';
  //     this.saveToken('adm');
  //   }
  //   if (loginModel.username === 'prof') {
  //     this.isLoggedFlag = true;
  //     this.typeUser = 'prf';
  //     this.saveToken('prf');
  //   }
  // }

  logout() {
    this.isLoggedFlag = false;
    localStorage.clear();
    // this.router.navigate(['/']);
  }

  isAdm() {
    return this.typeUser === 'admin';
  }

  isProf() {
    return this.typeUser === 'professor';
  }

  getUserName() {
    if (this.user.primeiroNome) {
      return this.user.primeiroNome;
    } else {
      return this.user.username;
    }

  }

  getId() {
    return this.user.uuid;
  }

  private saveToken(value: any) {
    localStorage.setItem('token', value);
  }

  public getToken(): any {
    return localStorage.getItem('token');
  }

}
