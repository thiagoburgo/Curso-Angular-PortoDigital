import {PostModel} from '../models/post.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss']
})
export class PostBodyComponent implements OnInit, OnChanges {


  private _body: string;

  get body(): string {
    return this._body;
  }

  @Input()
  set body(val: string) {
    console.log('Valor Atual:', val);
    console.log('Valor Anterior:', this._body);
    console.log('FirstChange? ', this._body === undefined);
    this._body = val;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (typeof changes.body.currentValue === 'string') {
    //   changes.body.currentValue.indexOf('');
    // }

    console.log('Changes: ', changes);
  }

}
