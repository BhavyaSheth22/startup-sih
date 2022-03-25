import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import commentService from '@services/comments.service';
import { Comment } from '@/interfaces/posts.interface';
import { CreateCommentDto } from '@/dtos/posts.dto';

class CommentsController {
  public commentService = new commentService();

  public getComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCommentsData: Comment[] = await this.commentService.findAllComments();

      res.status(200).json({ data: findAllCommentsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCommentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const findOneCommentData: Comment = await this.commentService.findCommentById(userId);

      res.status(200).json({ data: findOneCommentData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const commentData: CreateCommentDto = req.body;
      const createCommentData: Comment = await this.commentService.createComment(commentData);

      res.status(201).json({ data: createCommentData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public deleteComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const commentId: string = req.params.id;
      const deleteCommentData: Comment = await this.commentService.deleteComment(commentId);

      res.status(200).json({ data: deleteCommentData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };

  public addComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const commentData: CreateCommentDto = req.body;
      const createCommentData: Comment = await this.commentService.createComment(commentData);

      res.status(201).json({ data: createCommentData, message: 'created' });
    } catch (error) {
      next(error);
    }
  }
}

export default CommentsController;
