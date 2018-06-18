import { Component, OnInit } from '@angular/core';
import { PostModel } from '../models/post.model';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {

  comentario = '';

  post: PostModel = {
    body: 'Corpo de teste',
    title: 'Titulo de teste',
    id: 1
  };

  constructor() { }

  ngOnInit() {
  }

  onChange(model) {
    this.comentario = model;
  }
}
