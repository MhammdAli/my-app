import { useEffect, useState } from 'react'
import { getUsers , User} from 'services/users';

interface Req{
    users : User[],
    loading : boolean
}

const useUsers = () => {

  const [stateReq,setState] = useState<Req>({users : [],loading : false});
  
  useEffect(()=>{
    (async()=>{
        setState({users : [], loading : true})
        try{
          const users = await getUsers();
          setState({
            users : users,
            loading : false
          })
        }catch(err){
           console.log(err);
        }
    })();
  },[])

  return {
    Users : stateReq.users,
    isLoading : stateReq.loading
  }
}

export default useUsers
