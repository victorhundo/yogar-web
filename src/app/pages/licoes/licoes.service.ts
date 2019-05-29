import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { API } from 'src/app/API';
import { Observable } from 'rxjs';
import { Licao } from '../../models/licoes.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LicoesService {

  private path = `professores/${this.auth.getId()}/licoes`;

constructor(private http: HttpClient,
            private auth: AuthService) { }

  publicar(post: Licao): Observable<any> {
    return this.http.post<any>(`${API}/${this.path}`, post);
  }

  submit(post: FormData): Observable<any> {
    return this.http.post<any>(`${API}/${this.path}`, post);
  }

  getPostagens(): Observable<any> {
    return this.http.get<any>(`${API}/${this.auth}`);
  }

  getPost(id: number): Observable<any> {
    return this.http.get<any>(`${API}/${this.auth}/${id}`);
  }

  atualizar(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${API}/${this.auth}/${id}`, post);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${API}/${this.auth}/${id}`);
  }

}
