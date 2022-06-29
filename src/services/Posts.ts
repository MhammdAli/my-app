import { Apis } from 'configs/axios';
import {Post, PostRes} from 'services/Types/Posts';
export * from 'services/Types/Posts';


export async function createPost(post : Post) : Promise<Post>{
    
    try{
       const {data} = await Apis.post('/Posts',post);
       return Promise.resolve(data)
    }catch(err){
       return Promise.reject(err)
    }
    
}

export async function updatePost(id : string,post : Post) : Promise<void>{
    try{

      await Apis.put(`/Posts/${id}`,post)
      return Promise.resolve();
    }catch(err){
      return Promise.reject(err);
    }
}


export async function deletePost(id : string) : Promise<void>{
   try{

      await Apis.delete(`/Posts/${id}`)
      return Promise.resolve();
   }catch(err){
      return Promise.reject(err);
   }
}

export async function getPosts() : Promise<Post[]>{
   try{
      const {data} = await Apis.get('/Posts')
      return Promise.resolve(data); 
   }catch(err){  
      return Promise.reject(err)
   }
}

export async function getPostById(id : string) : Promise<PostRes>{
   try{
     const {data} = await Apis.get(`/Posts/${id}`)
     return Promise.resolve(data)
   }catch(err){
      return Promise.reject(err);
   }
}
