import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>('www.api.com/professores');
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(`www.api.com/professores/${id}`);
  }

  register(prof: any): Observable<any> {
    return this.http.post<any>(`www.api.com/professores/`, prof);
  }

  update(id: number, prof: any): Observable<any> {
    return this.http.put<any>(`www.api.com/professores/${id}`, prof);
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>(`www.api.com/professores/${id}`);
  }
}
