import { Router } from 'express';
import PostsController from '@controllers/posts.controller'
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreateCommentDto, CreatePostDto } from '@/dtos/posts.dto';
import CommentsController from '@/controllers/comments.controller';

class PostRoute implements Routes {
    public path = '/posts';
    public commentPath = `/comments`
    public router = Router();
    public postsController = new PostsController();
    public commentsController = new CommentsController()

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.postsController.getPosts);
        this.router.get(`${this.path}/:id`, this.postsController.getPostById);
        this.router.post(`${this.path}`, validationMiddleware(CreatePostDto, 'body'), this.postsController.createPost);
        // this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body', true), this.postsController.updateUser);
        this.router.delete(`${this.path}/:id`, this.postsController.deletePost);
        this.router.get(`${this.commentPath}`, this.commentsController.getComments)
        this.router.post(`${this.commentPath}`, validationMiddleware(CreateCommentDto, 'body'), this.commentsController.addComment)
    }
}

export default PostRoute