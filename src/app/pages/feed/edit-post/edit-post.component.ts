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
      this.post = result;
      console.log(result);
    });
  }

}
