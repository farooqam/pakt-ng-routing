import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostResolver } from './post-resolver.service';
import { PostEditInfoComponent } from './post-edit/post-edit-info.component';
import { PostEditTagsComponent } from './post-edit/post-edit-tags.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthGuard } from '../user/auth.guard';

const routes: Routes = [
  {
    path: 'posts',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PostListComponent
      },
      {
        path: ':id',
        component: PostDetailComponent,
        resolve: {
          resolveData: PostResolver
        }
      },
      {
        path: ':id/edit',
        component: PostEditComponent,
        resolve: {
          resolveData: PostResolver
        },
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: PostEditInfoComponent,
            resolve: {
              resolveData: PostResolver
            }
          },
          {
            path: 'tags',
            component: PostEditTagsComponent,
            resolve: {
              resolveData: PostResolver
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
