import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class BlogService {


  constructor(private http: HttpClient) {
  }

  consultarPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${environment.urls.blog.endPoint}/posts`);

    // return this.http.get<PostModel[]>(`${environment.urls.blog.endPoint}/posts`, {
    //   params: {
    //     userId: '1'
    //   }
    // });
  }

}
