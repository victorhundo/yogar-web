import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  publicar(post: Post): Observable<Post> {
    return this.http.post<any>(`http://api.yogar.splab.ufcg.edu.br/posts`, post);
  }

  getPostagens(): Observable<Post[]> {
    return this.http.get<Post[]>(`http://api.yogar.splab.ufcg.edu.br/posts`);
  }

  getListaAprovacao(): Observable<Post[]> {
    return this.http.get<Post[]>(`http://api.yogar.splab.ufcg.edu.br/posts`);
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
