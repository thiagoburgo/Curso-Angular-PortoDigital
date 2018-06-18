import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PostTitleComponent } from './post-title/post-title.component';
import { PostAuthorComponent } from './post-author/post-author.component';
import { PostBodyComponent } from './post-body/post-body.component';
import { BlogService } from './services/blog.service';

import { HttpClientModule } from '@angular/common/http';
import { LikeComponent } from './shared/like/like.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostTitleComponent,
    PostAuthorComponent,
    PostBodyComponent,
    LikeComponent,
    PostCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
