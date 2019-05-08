import { AuthService } from './../../login/auth.service';
import { FeedService } from './../feed.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  post: Post = new Post();
  postAddFlag = false;

  constructor(private feddService: FeedService,
              private auth: AuthService) { }

  ngOnInit() {
    this.post.uuidProfessor = this.auth.user.id;
  }


  publicar() {
    console.log(this.post);
    this.feddService.publicar(this.post).subscribe( result =>{
      console.log(result);
      this.postAddFlag = true;
      this.post = new Post();
    });
  }
}
