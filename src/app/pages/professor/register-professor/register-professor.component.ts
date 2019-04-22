import { ProfessorService } from './../professor-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-professor',
  templateUrl: './register-professor.component.html',
  styleUrls: ['./register-professor.component.css']
})
export class RegisterProfessorComponent implements OnInit {

  professor: any;

  constructor(private profService: ProfessorService) { }

  ngOnInit() {
  }

  register() {
    this.profService.register(this.professor).subscribe(resp =>{
      console.log(resp);
    });
  }

}
