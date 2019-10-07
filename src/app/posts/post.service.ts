import { Injectable } from '@angular/core';
import { Observable, of, from, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPost(id: number | string): any {
    return this.getPosts().pipe(
      map((posts: Post[]) => posts.find(p => p.id === +id))
    );
  }

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }

  constructor() {}
}
