import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/auth.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedFlag = false;

  typeUser: string;

  user: any;


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
                  this.typeUser = token;
                }
              }

  // login(loginModel: LoginModel) {
  //   console.log(loginModel);
  //   this.http.post<any>(`http://api.yogar.splab.ufcg.edu.br/auth/login`, loginModel).subscribe(
  //     result => {
  //       this.isLoggedFlag = true;
  //       this.typeUser = result.type;
  //       this.user = result.user;
  //       localStorage.setItem('token', result.token);
  //     },
  //     error => {
  //       console.log('error de login');
  //     });
  // }

  login(loginModel: LoginModel) {
    console.log(loginModel);
    if (loginModel.username === 'admin') {
      this.isLoggedFlag = true;
      this.typeUser = 'adm';
      this.saveToken('adm');
    }
    if (loginModel.username === 'prof') {
      this.isLoggedFlag = true;
      this.typeUser = 'prf';
      this.saveToken('prf');
    }
  }

  logout() {
    this.isLoggedFlag = false;
    localStorage.clear();
  }

  private saveToken(value: string) {
    localStorage.setItem('token', value);
  }

  private getToken(): string {
    return localStorage.getItem('token');
  }

}
