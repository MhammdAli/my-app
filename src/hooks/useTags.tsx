import { useEffect, useState } from 'react'
import { getTags , Tag} from 'services/Tags';

interface Req{
    Tags : Tag[],
    loading : boolean
}

const useTags = () => {

  const [stateReq,setState] = useState<Req>({Tags : [],loading : false});
  
  useEffect(()=>{
    (async()=>{
        setState({Tags : [], loading : true})
        try{
          const tags = await getTags(); 
          setState({
            Tags : tags,
            loading : false
          })
        }catch(err){
           console.log(err);
        }
    })();
  },[])

  return {
    Tags : stateReq.Tags,
    isLoading : stateReq.loading
  }
}

export default useTags
