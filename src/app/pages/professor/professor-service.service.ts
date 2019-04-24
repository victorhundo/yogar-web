import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProfessorDto, ProfessorRegisterDto } from 'src/app/models/professor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProfessorDto[]> {
    return this.http.get<ProfessorDto[]>('http://api.yogar.splab.ufcg.edu.br/professores');
  }

  get(id: number): Observable<ProfessorDto[]> {
    return this.http.get<ProfessorDto[]>(`http://api.yogar.splab.ufcg.edu.br/professores/${id}`);
  }

  register(prof: ProfessorRegisterDto): Observable<any> {
    return this.http.post<any>(`http://api.yogar.splab.ufcg.edu.br/professores/`, prof);
  }

  update(id: number, prof: ProfessorDto): Observable<ProfessorDto> {
    return this.http.put<ProfessorDto>(`http://api.yogar.splab.ufcg.edu.br/professores/${id}`, prof);
  }

  delete(id: number): Observable<ProfessorDto>{
    return this.http.delete<ProfessorDto>(`http://api.yogar.splab.ufcg.edu.br/professores/${id}`);
  }
}
