import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import PostService from '@services/posts.service';
import { Post } from '@/interfaces/posts.interface';
import { CreateCommentDto, CreatePostDto } from '@/dtos/posts.dto';

class PostsController {
  public postService = new PostService();

  public getPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllPostsData: Post[] = await this.postService.findAllPosts();

      res.status(200).json({ data: findAllPostsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getPostById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId: string = req.params.id;
      const findOnePostData: Post = await this.postService.findPostById(postId);

      res.status(200).json({ data: findOnePostData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postData: CreatePostDto = req.body;
      const createPostData: Post = await this.postService.createPost(postData);

      res.status(201).json({ data: createPostData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public async addCommentToPost(req: Request, res: Response, next: NextFunction) {
    const {postId, commentId} = req.body;

    const findOnePostData: Post = await this.postService.findPostById(postId);
    findOnePostData.comments.push(commentId);
    const updatePostData = await this.postService.updatePost(postId, findOnePostData);

    res.status(204).json({ data: updatePostData, message: 'updated' });
  }

  public deletePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId: string = req.params.id;
      const deletePostData: Post = await this.postService.deletePost(postId);

      res.status(200).json({ data: deletePostData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default PostsController;
