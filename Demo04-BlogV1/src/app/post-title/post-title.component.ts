import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.scss']
})
export class PostTitleComponent implements OnInit {

  @Input()
  title: string;

  like = false;

  constructor() { }

  ngOnInit() {
  }
  onLike(liked: boolean) {
    this.like = liked;
  }
}
