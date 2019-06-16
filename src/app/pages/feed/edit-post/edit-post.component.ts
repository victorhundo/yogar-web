import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';
import { FeedService } from '../feed.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: Post = new Post();
  postAddFlag = false;

  constructor(private feddService: FeedService,
              private auth: AuthService,
              private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.post.id = this.activeRouter.snapshot.params.id;
    this.feddService.getPost(this.post.id).subscribe(result => {
      this.post = result[0];
      console.log(result[0]);
    });
  }

  atualizar() {
// tslint:disable-next-line: forin
    for (const val in this.post) {
      console.log(val);
      const valStr = val.toString;
      let value = {
        '"campo"': val,
        '"valor"': this.post[val]
      };
      console.log(value);
      this.feddService.atualizar(this.post.id,value).subscribe(
        result => {
          // this.post = result;
          console.log(result);
        },
        error => {
          console.log('Não foi possível atualizar', error);
        }
      );
    };

  }

}
