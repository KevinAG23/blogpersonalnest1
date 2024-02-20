// posts.service.ts
import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { Post, Comment } from '../models/post.model';


@Injectable()
export class PostsService {
  private posts: Post[] = [];
  constructor() {
    // Agregar algunos posts de prueba al iniciar la aplicación
    this.createPost({
      id: uuidv4(),
      title: 'Post 1',
      content: 'Contenido del post 1',
    });
    this.createPost({
      id: uuidv4(),
      title: 'Post 2',
      content: 'Contenido del post 2',
    });
    this.createPost({
      id: uuidv4(),
      title: 'Post 3',
      content: 'Contenido del post 3',
    });
  }

  getAllPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: string): Post {
    return this.posts.find(post => post.id === id);
  }

  createPost(post: Post): void {
    this.posts.push(post);
  }

  updatePost(id: string, updatedPost: Post): void {
    const index = this.posts.findIndex(post => post.id === id);
    if (index !== -1) {
      this.posts[index] = { ...this.posts[index], ...updatedPost };
    }
  }

  deletePost(id: string): void {
    this.posts = this.posts.filter(post => post.id !== id);
  }

  getCommentsForPost(postId: string): Comment[] {
    const post = this.getPostById(postId);
    return post && post.comments ? post.comments : [];
  }

  addCommentToPost(postId: string, comment: Comment): void {
    const post = this.getPostById(postId);
    if (post) {
      if (!post.comments) {
        post.comments = [];
      }
      post.comments.push(comment);
    }
  }
}
