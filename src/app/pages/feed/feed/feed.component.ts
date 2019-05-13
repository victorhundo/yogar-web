import { Post } from './../../../models/post.model';
import { FeedService } from './../feed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPost: Post[] = [];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getPostagens().subscribe(result => {
      console.log(result);
      this.listaPost = result;
    });
  }

}
