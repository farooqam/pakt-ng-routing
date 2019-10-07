import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditInfoComponent } from './post-edit/post-edit-info.component';
import { PostEditTagsComponent } from './post-edit/post-edit-tags.component';
import { PostEditComponent } from './post-edit/post-edit.component';

@NgModule({
  declarations: [
    PostDetailComponent,
    PostListComponent,
    PostEditInfoComponent,
    PostEditTagsComponent,
    PostEditComponent
  ],
  imports: [CommonModule, PostsRoutingModule]
})
export class PostsModule {}
