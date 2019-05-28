import { Post } from './../../../models/post.model';
import { FeedService } from './../feed.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

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

  constructor(private feedService: FeedService,
              private router: Router) { }

  ngOnInit() {
    this.feedService.getPostagens().subscribe(result => {
      console.log(result);
      this.listaPost = result;
    });
  }

  edit(post: Post) {
    this.router.navigate(['/edit/post', {id: post.id}]);
  }

  deleteModalFlagF(uuid: number) {
    this.deleteUuid = uuid;
    this.deleteModalFlag = !this.deleteModalFlag;
  }

  delete() {
    console.log(this.deleteUuid);
    this.feedService.delete(this.deleteUuid).subscribe( resp =>{
      console.log(resp);
      this.deleteModalFlagF(undefined);
      this.ngOnInit();
    });
  }

}
