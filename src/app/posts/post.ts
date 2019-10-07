export class Post {
  id: number;
  title: string;
  content: string;
  description: string;
}

export interface PostResolved {
  post: Post;
  error?: any;
}
