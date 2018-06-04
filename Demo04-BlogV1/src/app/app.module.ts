import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PostTitleComponent } from './post-title/post-title.component';
import { PostAuthorComponent } from './post-author/post-author.component';
import { PostBodyComponent } from './post-body/post-body.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostTitleComponent,
    PostAuthorComponent,
    PostBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
