import { ProfessorService } from './../professor-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor, ProfessorDto } from 'src/app/models/professor.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.css']
})
export class ListProfessorComponent implements OnInit {

  professores: ProfessorDto[] = [];
  displayedColumns: string[] = ['Username', 'Email','Editar','Remover'];
  dataSource: any;


  // flags para deleção
  deleteModalFlag = false;
  deleteUuid: number;

  constructor(private router: Router,
              private professorService: ProfessorService) { }

  ngOnInit() {
    this.professorService.getAll().subscribe(resp => {
      this.professores = resp;
      this.dataSource = this.professores;
      console.log(this.professores)
    });
  }

  routerTo(rota: string, parans: number) {
    this.router.navigate([rota , { id: parans}]);
  }

  deleteModalFlagF(uuid: number) {
    this.deleteUuid = uuid;
    this.deleteModalFlag = !this.deleteModalFlag;
  }

  delete() {
    console.log(this.deleteUuid);
    this.professorService.delete(this.deleteUuid).subscribe(resp =>{
      console.log(resp);
      this.deleteModalFlagF(undefined);
      this.ngOnInit();
    });
  }

}
