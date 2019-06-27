import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProfessorDto, ProfessorRegisterDto } from 'src/app/models/professor.model';
import { API } from 'src/app/API';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProfessorDto[]> {
    return this.http.get<ProfessorDto[]>(`${API}/professores`);
  }

  get(id: number): Observable<ProfessorDto[]> {
    return this.http.get<ProfessorDto[]>(`${API}/professores/${id}`);
  }

  register(prof: ProfessorRegisterDto): Observable<any> {
    return this.http.post<any>(`${API}/professores/`, prof);
  }

  update(id: any, prof: any): Observable<ProfessorDto> {
    console.log(id);
    return this.http.put<ProfessorDto>(`${API}/professores/${id}`, prof);
  }

  delete(id: number): Observable<ProfessorDto>{
    return this.http.delete<ProfessorDto>(`${API}/professores/${id}`);
  }
}
