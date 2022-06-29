import { Apis } from 'configs/axios';
import {Tag} from 'services/Types/Tags';
export * from 'services/Types/Tags';

export async function createTag(tag : Tag) : Promise<Tag>{
   try{
     const {data} = await Apis.post('/Tags',tag);
     return Promise.resolve(data)
   }catch(err){
     return Promise.reject(err);
   }
}

export async function updateTag(id : string,tag : Tag) : Promise<void>{
    try{
       await Apis.put(`/Tags/${id}`,tag);
       return Promise.resolve();
    }catch(err){
       return Promise.reject(err);
    }
}

export async function deleteTag(id : string) : Promise<void>{
    try{
       await Apis.delete(`/Tags/${id}`);
       return Promise.resolve();
    }catch(err){
       return Promise.reject(err);
    }
} 

export async function getTagById(id : string) : Promise<Tag>{
   try{
      const {data} = await Apis.get(`/Tags/${id}`)
      return Promise.resolve(data);
   }catch(err){
      return Promise.reject(err);
   }
}

export async function getTags() : Promise<Tag[]>{
    try{
        const {data} = await Apis.get('/Tags')
        return Promise.resolve(data); 
    }catch(err){
        return Promise.reject(err)
    }
}


