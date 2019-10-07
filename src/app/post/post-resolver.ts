import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { PostService } from './post.service';
import { PostResolved } from './post-resolved';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<PostResolved> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostResolved> {
    const id = route.paramMap.get('id');

    if (id === 'error') {
      return of({post: null, error: `Invalid id '${id}'`});
    }

    return this.postService.getPost(id).pipe(
      map(post => ({post: post})),
      catchError(error => {
        const message = `Could not load post with id ${id}`;
        console.error(`${message}\nInner error:\n${error.message}`);
        return of({post: null, error: message});
      })
    );
  }

  constructor(private postService: PostService) { }
}
