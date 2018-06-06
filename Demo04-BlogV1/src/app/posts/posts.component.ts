import { Component, OnInit } from '@angular/core';
import { PostModel } from '../models/post.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  date: Date = new Date();
  posts: PostModel[];

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

}
