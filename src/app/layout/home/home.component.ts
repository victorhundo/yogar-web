import { AuthService } from './../../pages/login/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  professorFlag = false;

  constructor(private auth: AuthService,
              private route: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

  edit() {
    this.route.navigate(['edit/professor']);
  }

  isLogged(): boolean {
    return this.auth.isLoggedFlag;
  }

  isProf(): boolean {
    return this.auth.isProf();
  }
}
