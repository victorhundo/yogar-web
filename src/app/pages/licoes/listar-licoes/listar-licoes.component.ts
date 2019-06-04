import { AuthService } from './../../login/auth.service';
import { LicoesService } from './../licoes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Licao } from 'src/app/models/licoes.model';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-listar-licoes',
  templateUrl: './listar-licoes.component.html',
  styleUrls: ['./listar-licoes.component.css']
})
export class ListarLicoesComponent implements OnInit {

  licoes: Licao[] = [];
  deleteModalFlag = false;
  deleteUuid: number;

  constructor(private router: Router,
              private licoesService: LicoesService,
              private auth: AuthService) { }

  ngOnInit() {
    this.licoesService.getAll().subscribe(result => {
      this.licoes = result;
      console.log(result);
    });
  }

  edit(licao: Licao) {
    this.router.navigate(['/edit/licao', {id: licao.id}]);
  }

  deleteModalFlagF(uiid: number) {
    this.deleteUuid = uiid;
    this.deleteModalFlag = !this.deleteModalFlag;
  }

  delete() {
    console.log(this.deleteUuid);
    this.licoesService.delete(this.deleteUuid).subscribe(result =>{
      console.log(result);
      this.deleteModalFlagF(undefined);
      this.ngOnInit();
    });
  }

  getVideo(id:number){
    return `http://api.yogar.splab.ufcg.edu.br/professores/${this.auth.getId()}/licoes/${id}/video`;
  }

}
