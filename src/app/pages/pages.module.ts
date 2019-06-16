import { LicoesModule } from './licoes/licoes.module';
import { ProfessorModule } from './professor/professor.module';
import { FeedModule } from './feed/feed.module';
import { AuthService } from './login/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { TokenInterceptor } from './token.interceptor';
import { InitialComponent } from './initial/initial.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [LoginComponent, InitialComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProfessorModule,
    LicoesModule,
    FeedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        headerName: 'x-session-token'
      }
    })
  ],
  exports: [LoginComponent],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }]
})
export class PagesModule { }
