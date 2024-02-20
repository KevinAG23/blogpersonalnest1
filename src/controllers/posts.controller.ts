// posts.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { Post as PostModel, Comment } from '../models/post.model';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts(): PostModel[] {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string): PostModel {
    return this.postsService.getPostById(id);
  }

  @Post()
  createPost(@Body() post: PostModel): void {
    this.postsService.createPost(post);
  }

  @Put(':id')
  updatePost(@Param('id') id: string, @Body() updatedPost: PostModel): void {
    this.postsService.updatePost(id, updatedPost);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string): void {
    this.postsService.deletePost(id);
  }

  @Get(':id/comments')
  getCommentsForPost(@Param('id') id: string): Comment[] {
    return this.postsService.getCommentsForPost(id);
  }

  @Post(':id/comments')
  addCommentToPost(@Param('id') id: string, @Body() comment: Comment): void {
    this.postsService.addCommentToPost(id, comment);
  }
}