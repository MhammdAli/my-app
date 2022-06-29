import React, { useEffect, useMemo, useState } from 'react'
import Table from 'components/Table' 
import Button from 'components/Button';
import { deletePost, getPosts, Post } from 'services/Posts';
import { toast, ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom';
 

const COLS = [
  {
    title : 'id',
    dataIndex : 'id' 
  },
  {
    title : 'description',
    dataIndex : 'description'
  },
  {
    title: 'Title',
    dataIndex: 'title', 
  },
  {
    title: 'posted Date',
    dataIndex: 'postedDate', 
  } 
];

 

  function Actions(data : Post[],changeData : (data : Post[])=>void){
   
   
    return {
      title: 'Operations',
      dataIndex: '', 
      render: (row : Post) => { 
       
        const handleDelete = async()=>{
           
          try{
            await deletePost(row.id as string);
            const newData = data.filter((currentRow : Post)=>currentRow.id !== row.id) 
            changeData(newData);
            toast.success('post deleted successfuly')
          }catch(err : any){
            toast.error(err.message);
          }

        }

    

        return (
          <div className='space-x-3 flex '>
            <NavLink to={`/edit/post/${row.id}`} className='btn-sm btn primary contained'>Update</NavLink>
            <Button className='btn-sm' variantColor='danger' href='#' onClick={handleDelete}>Delete</Button> 
         </div>
        )
      }
    }
  }


const PostsView = () => {

  const [Posts,setPosts] = useState<Post[]>([]);
  const columns = useMemo(()=>[...COLS,Actions(Posts,setPosts)],[Posts])
  useEffect(()=>{

    (async()=>{
        try{
          const posts = await getPosts();
          setPosts(posts)
        }catch(err : any){
          toast.error(err.message)
        }
    })();
    
  },[])


  return (
    <div>
      <ToastContainer />
      <Table columns={columns} rows={Posts} title='Posts Data' rowKey='id'/>
    </div>
  )
}


 

export default PostsView
