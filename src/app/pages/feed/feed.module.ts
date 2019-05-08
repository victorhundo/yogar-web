import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { FormsModule } from '@angular/forms';
import { FeedService } from './feed.service';

@NgModule({
  declarations: [FeedComponent, NewPostComponent, ViewPostComponent, EditPostComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FeedComponent, NewPostComponent, ViewPostComponent, EditPostComponent],
  providers: [FeedService]
})
export class FeedModule { }
