import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Post } from './post';
import { Observable } from 'rxjs';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    const id = route.paramMap.get('id');
    return this.postService.getPost(id);
  }

  constructor(private postService: PostService) { }
}
