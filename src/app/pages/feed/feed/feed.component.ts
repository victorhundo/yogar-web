import { AuthService } from './../../login/auth.service';
import { Post } from './../../../models/post.model';
import { FeedService } from './../feed.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'src/app/API';
// import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPost: Post[] = [];

  // flags para deleção
  deleteModalFlag = false;
  deleteUuid: number;
  API_URL_IMG: string;

  constructor(private feedService: FeedService,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    this.feedService.getPostagens().subscribe(result => {
      console.log(result);
      this.listaPost = result;
      var uuid = JSON.parse(localStorage.getItem('user'))['uuid'];
      this.API_URL_IMG = `${API}/professores/${uuid}/posts/`
    });
  }

  edit(post: Post) {
    this.router.navigate(['/edit/post', {id: post.id}]);
  }

  deleteModalFlagF(uuid: number) {
    this.deleteUuid = uuid;
    this.deleteModalFlag = !this.deleteModalFlag;
  }

  delete(uuid: number) {
    console.log(uuid);
    this.feedService.delete(uuid).subscribe( resp =>{
      console.log(resp);
      this.deleteModalFlagF(undefined);
      this.ngOnInit();
    });
  }

  getImg(id:number){
    return `http://api.yogar.splab.ufcg.edu.br/professores/${this.auth.getId()}/posts/${id}/img`;
  }
}
