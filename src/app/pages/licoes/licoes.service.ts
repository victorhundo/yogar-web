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

  // aprovação pro adm
  aprovar(post: Licao): Observable<any> {
    return this.http.post<any>(`${API}/${this.path}`, post);
  }

  // Submissão para o professores
  submit(post: FormData): Observable<any> {
    return this.http.post<any>(`${API}/${this.path}`, post);
  }

  // get todas de um professor
  getAll(): Observable<Licao[]> {
    return this.http.get<Licao[]>(`${API}/${this.path}`);
  }

  get(id: number): Observable<Licao> {
    return this.http.get<Licao>(`${API}/${this.path}/${id}`);
  }

  getVideo(id: number): Observable<any> {
    return this.http.get<any>(`${API}/${this.path}/${id}`);
  }

  atualizar(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${API}/${this.path}/${id}`, post);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${API}/${this.path}/${id}`);
  }

}
