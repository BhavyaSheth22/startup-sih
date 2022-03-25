import { hash } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { isEmpty } from '@utils/util';
import { commentModel } from '@/models/posts.model';
import { Comment } from '@/interfaces/posts.interface';
import { CreateCommentDto } from '@/dtos/posts.dto';

class CommentService {
  public comments = commentModel;

  public async findAllComments(): Promise<Comment[]> {
    const comments: Comment[] = await this.comments.find().populate("user").populate("post");
    return comments;
  }

  public async findCommentById(commentId: string): Promise<Comment> {
    if (isEmpty(commentId)) throw new HttpException(400, "You're not comment id");

    const findComment: Comment = await this.comments.findOne({ _id: commentId }).populate("poster");
    if (!findComment) throw new HttpException(409, "No comment found");

    return findComment;
  }

  public async createComment(commentData: CreateCommentDto): Promise<Comment> {
    if (isEmpty(commentData)) throw new HttpException(400, "Comment info not received");

    // const hashedPassword = await hash(postData.password, 10);
    const createCommentData: Comment = await this.comments.create({ ...commentData });

    return createCommentData;
  }

  public async getCommentsByPost(postId: string): Promise<Comment[]> {
    const commentsOfPostData: Comment[] = await this.comments.find({ post: postId });

    return commentsOfPostData;
  }

  public async deleteComment(commentId: string): Promise<Comment> {
    const deleteCommentById: Comment = await this.comments.findByIdAndDelete(commentId);
    if (!deleteCommentById) throw new HttpException(409, "You're not user");

    return deleteCommentById;
  }
}

export default CommentService;
