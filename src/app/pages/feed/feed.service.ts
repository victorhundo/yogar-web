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
    return this.http.get<Post[]>(`${API}/professores/${this.auth.getId()}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${API}/professores/${this.auth.getId()}/posts/${id}`);
  }

  atualizar(postId: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${API}/professores/${this.auth.getId()}/posts/${postId}`, post);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${API}/professores/${this.auth.getId()}/posts/${id}`);
  }

}
