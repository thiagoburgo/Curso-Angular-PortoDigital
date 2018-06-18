import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PostModel } from '../models/post.model';
import { PostCommentComponent } from '../post-comment/post-comment.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostModel;

  @ViewChild('comment')
  comentario: PostCommentComponent;

  constructor() { }

  ngOnInit() {
    console.log(this.comentario);
  }

}
