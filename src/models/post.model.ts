// En post.model.ts
export interface Post {
  id: string;
  title: string;
  content: string;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  text: string;
}
