import { Comment, Like } from "@/interfaces/posts.interface";
import { User } from "@/interfaces/users.interface";
import { IsDefined, IsOptional, IsString, IsUrl } from "class-validator";

export class CreatePostDto {
    @IsString()
    public title: string;

    @IsString()
    public text: string;

    @IsString()
    @IsUrl()
    public photoUrl: string;

    // @IsOptional()
    // public likes: Like[];

    @IsOptional()
    public comments: Comment[];

    @IsString()
    @IsDefined()
    public poster: string

}

export class CreateCommentDto {
    @IsString()
    public text: string;

    @IsString()
    public user: string;

    @IsString()
    public post: string;
}