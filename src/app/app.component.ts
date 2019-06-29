import { AuthService } from './pages/login/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'yogar-web';

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit() {
    if (!this.authService.isLoggedFlag &&
         (window.location.pathname == '/')){
      this.router.navigate(['index']);
    }
  }

  isRoot(){
    return window.location.pathname == '/'
  }

  isIndex(){
    return window.location.pathname == '/index'
  }

  gotoIndex(){
    if (!this.authService.isLoggedFlag && this.isRoot()){
      this.router.navigate(['index']);
    }
  }

}
