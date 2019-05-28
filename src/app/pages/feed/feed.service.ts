import { AuthService } from './../login/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { API } from 'src/app/API';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient,
              private auth: AuthService) { }

  publicar(post: Post): Observable<Post> {
    return this.http.post<any>(`${API}/professores/${this.auth.getId()}/posts`, post);
  }

  submit(post: FormData): Observable<Post> {
    return this.http.post<any>(`${API}/professores/${this.auth.getId()}/posts`, post);
  }

  getPostagens(): Observable<Post[]> {
    return this.http.get<Post[]>(`${API}/posts/`);
  }

  getListaAprovacao(): Observable<Post[]> {
    return this.http.get<Post[]>(`${API}/posts`);
  }

  aprovar(post: Post) {

  }

  reporvar() {

  }

  atualizar() {

  }

  remover(){

  }

}
