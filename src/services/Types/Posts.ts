import {Tag} from 'services/Types/Tags'
export type PostId = number


export interface Post {
    id ?: string,
    title ?: string,
    description ?: string,
    postedDate ?: string,
    userId ?: string ,
    tagIds ?: string[] | undefined
} 

export interface PostRes extends Post {
    tags : Tag[],
    authorId : string
}

