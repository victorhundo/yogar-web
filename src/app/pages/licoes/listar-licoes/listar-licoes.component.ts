import { AuthService } from './../../login/auth.service';
import { LicoesService } from './../licoes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Licao } from 'src/app/models/licoes.model';
import { post } from 'selenium-webdriver/http';
import { API } from 'src/app/API';


@Component({
  selector: 'app-listar-licoes',
  templateUrl: './listar-licoes.component.html',
  styleUrls: ['./listar-licoes.component.css']
})
export class ListarLicoesComponent implements OnInit {

  licoes: Licao[] = [];
  deleteModalFlag = false;
  deleteUuid: number;
  API_URL_VIDEO: string;

  constructor(private router: Router,
              private licoesService: LicoesService,
              private auth: AuthService) { }

  ngOnInit() {
    this.licoesService.getAll().subscribe(result => {
      var uuid = JSON.parse(localStorage.getItem('user'))['uuid'];
      this.API_URL_VIDEO = `${API}/professores/${uuid}/licoes/`
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

  delete(uiid: number) {
    console.log(uiid);
    this.licoesService.delete(uiid).subscribe(result =>{
      console.log(result);
      this.deleteModalFlagF(undefined);
      this.ngOnInit();
    });
  }

  getVideo(id:number){
    return `http://api.yogar.splab.ufcg.edu.br/professores/${this.auth.getId()}/licoes/${id}/video`;
  }

}
