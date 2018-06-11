import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  private _like = false;

  @Input()
  set like(val: boolean) {
    this._like = val;
    this.liked.emit(this._like);
  }

  get like(): boolean {
    return this._like;
  }

  @Output()
  liked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  likeIt() {
    this.like = !this.like;
  }

}
