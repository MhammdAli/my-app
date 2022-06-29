import {Apis} from 'configs/axios';
import {User} from 'services/Types/Users';
export * from 'services/Types/Users';
 
export async function createUser(user : User) : Promise<User | undefined>{
    try{
        const result = await Apis.post('/users',user)
        return Promise.resolve(result.data)
    }catch(err){ 
        return Promise.reject(err);
    }
}

export async function updateUser(id : string,user:User) : Promise<void>{
 
    try{
       await Apis.put(`/users/${id}`,user)
       return Promise.resolve();
    }catch(err){
       return Promise.reject(err);
    }
    
}

 
export async function deleteUser(id:string) {
    
    try{
        await Apis.delete(`/users/${id}`)
        return Promise.resolve();
    }catch(err){
        return Promise.reject(err);
    }

}


export async function getUsers() : Promise<User[]>{
    try{
        const {data} = await Apis.get('/users')
        return Promise.resolve(data); 
    }catch(err){
        return Promise.reject(err)
    }

}

export async function getUserById(id : string){
    try{
        const {data} = await Apis.get(`/users/${id}`)
        return Promise.resolve(data); 
    }catch(err){
        return Promise.reject(err)
    }
}




