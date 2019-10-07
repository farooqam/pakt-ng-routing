import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { PostResolved } from './post';
import { Observable, of } from 'rxjs';
import { PostService } from './post.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<PostResolved> {
  constructor(private postService: PostService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PostResolved> {
    const id = +route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Post id was not a number ${id}`;
      console.error(message);
      return of({ post: null, error: message });
    }
    return this.postService.getPost(+id).pipe(
      // if it has found post then return only post
      // error property is an optional that's why we have modified the structure
      map(post => ({ post: post })),
      catchError(err => {
        const errorMsg = `Unable to load post ${err}`;
        console.error(errorMsg);
        return of({ post: null, error: errorMsg });
      })
    );
  }
}
