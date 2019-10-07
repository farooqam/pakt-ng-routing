import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-post-edit-info',
  template: `
    <p>
      post-edit-info works!
    </p>
  `,
  styles: []
})
export class PostEditInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  post: Post;
  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.post = data['resolveData'].post;
      // we can also get the error from resolvedData
      console.log(this.post);
    });
  }
}
