import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    const postResolved = this.route.snapshot.data['resolved'];
    this.post = postResolved.post;
    this.errorMessage = postResolved.error;
  }

}
