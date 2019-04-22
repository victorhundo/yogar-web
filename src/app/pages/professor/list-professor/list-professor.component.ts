import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.css']
})
export class ListProfessorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routerTo(rota: string, parans: number) {
    this.router.navigate([rota , { id: parans}]);
  }

}
