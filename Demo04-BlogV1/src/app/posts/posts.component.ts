import { Component, OnInit, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { PostModel } from '../models/post.model';
import { BlogService } from '../services/blog.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit,  AfterViewInit  {

  date: Date = new Date();
  posts: PostModel[];

  @ViewChildren(PostComponent)
  postComponents: QueryList<PostComponent>;

  // private _blogService: BlogService;
  constructor(private blogService: BlogService) {
    // this._blogService = blogService;
  }

  ngOnInit() {

    this.blogService.consultarPosts()
                    .subscribe((posts) => {
                        this.posts = posts;
                    }, (err) => {
                      alert('Deu zica!');
                    });
  }

  ngAfterViewInit() {
    console.log('Post Components: ', this.postComponents);
    // console.log('Primeiro comentário:', this.postComponents.first.comentario);
    this.postComponents.changes.subscribe((changes) => {
      console.log('Alguém mudou: ', changes);
    });
  }

}
