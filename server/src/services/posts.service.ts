import { hash } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { isEmpty } from '@utils/util';
import { postModel } from '@/models/posts.model';
import { Post } from '@/interfaces/posts.interface';
import { CreatePostDto } from '@/dtos/posts.dto';

class PostService {
  public posts = postModel;

  public async findAllPosts(): Promise<Post[]> {
    const posts: Post[] = await this.posts.find().populate("poster");
    return posts;
  }

  public async findPostById(postId: string): Promise<Post> {
    if (isEmpty(postId)) throw new HttpException(400, "You're not userpostId");

    const findPost: Post = await this.posts.findOne({ _id: postId }).populate("poster");
    if (!findPost) throw new HttpException(409, "No post found");

    return findPost;
  }

  public async createPost(postData: CreatePostDto): Promise<Post> {
    if (isEmpty(postData)) throw new HttpException(400, "Post info not received");

    // const hashedPassword = await hash(postData.password, 10);
    const createPostData: Post = await this.posts.create({ ...postData });

    return createPostData;
  }

  public async updatePost(postId: string, postData: Post): Promise<Post> {
    if (isEmpty(postData)) throw new HttpException(400, "You're not postData");

    const updatePostById: Post = await this.posts.findByIdAndUpdate(postId, { postData });
    if (!updatePostById) throw new HttpException(409, "You're not user");

    return updatePostById;
  }

  public async deletePost(postId: string): Promise<Post> {
    const deletePostById: Post = await this.posts.findByIdAndDelete(postId);
    if (!deletePostById) throw new HttpException(409, "You're not user");

    return deletePostById;
  }
}

export default PostService;
