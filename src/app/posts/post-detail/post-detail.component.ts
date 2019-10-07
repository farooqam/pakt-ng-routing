import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  post: Post;
  errorMessage: string;

  ngOnInit() {
    // with snapshot
    // this.post = this.route.snapshot.data['resolveData'].post;
    // we can also get the error from resolvedData
    // this.errorMessage = this.route.snapshot.data['resolveData'].error;
    // console.log(this.post);

    // with observable
    this.route.data.subscribe(data => {
      this.post = data['resolveData'].post;
      // we can also get the error from resolvedData
      this.errorMessage = data['resolveData'].error;
      console.log(this.post);
    });
  }
  gotoPosts() {
    // this.router.navigateByUrl('/posts');
    this.router.navigate(['/posts']);
  }
}
