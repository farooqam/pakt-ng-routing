import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-post-edit',
  template: `
    <div>
      <div class="card mt-3 tab-card">
        <div class="card-header tab-card-header">
          <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link"
                id="one-tab"
                data-toggle="tab"
                [routerLink]="['info']"
                role="tab"
                aria-controls="One"
                aria-selected="true"
                >Info</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="three-tab"
                data-toggle="tab"
                [routerLink]="['tags']"
                role="tab"
                aria-controls="Three"
                aria-selected="false"
                >Tags</a
              >
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active p-3"
              id="one"
              role="tabpanel"
              aria-labelledby="one-tab"
            >
              <router-outlet> </router-outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PostEditComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  post: Post;

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.post = data['resolveData'].post;
      // we can also get the error from resolvedData
      // console.log(this.post);
    });
  }
}
