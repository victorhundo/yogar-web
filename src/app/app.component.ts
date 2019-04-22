import { AuthService } from './pages/login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yogar-web';

  constructor(private authService: AuthService){

  }

}
