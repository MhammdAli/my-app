import React, { useEffect, useMemo, useState } from 'react'
import Table from 'components/Table' 
import Button from 'components/Button';
import { NavLink } from 'react-router-dom';
import { deleteTag, getTags, Tag } from 'services/Tags';
import { toast, ToastContainer } from 'react-toastify';
 
const COLS = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',  
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',  
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description', 
  }
];

 
  
  function Actions(data : Tag[],changeData : (data : Tag[])=>void){
   
   
    return {
      title: 'Operations',
      dataIndex: '', 
      render: (row : Tag) => { 
       
        const handleDelete = async ()=>{
           try{
             await deleteTag(row.id as string)
             const newData = data.filter((currentRow : Tag)=>currentRow.id !== row.id)  
             toast.success('tag deleted successfuly')
             changeData(newData); 
           }catch(err : any){
             toast.error(err.message)
           }
        }
 
        return (
          <div className='space-x-3 flex '>
            <NavLink to={`/edit/tag/${row.id}`} className='btn-sm btn primary contained'>Update</NavLink>
            <Button className='btn-sm' variantColor='danger' href='#' onClick={handleDelete}>Delete</Button> 
         </div>
        )
      }
    }
  }

  

const TagsView = () => {

  const [data,setData] = useState<Tag[]>([]); 
  const columns = useMemo(()=>[...COLS,Actions(data,setData)],[data])
 
  useEffect(()=>{
    (async()=>{
      try{ 
        const tags = await getTags();
        setData(tags); 
      }catch(err : any){
        toast.error(err.message);
      } 
    })()

  },[])

  
  return (
    <>
      <ToastContainer/>
      <Table columns={columns} rows={data} title='Tags Data' rowKey={'id'}/>
    </>
  )
}


 

export default TagsView
