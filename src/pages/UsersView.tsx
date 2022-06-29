import React, { useEffect, useMemo, useState } from 'react'
import Table from 'components/Table' 
import Button from 'components/Button';
import { NavLink } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import {User,deleteUser, getUsers} from 'services/users'
const COLS = [
  {
    title: 'Id',
    dataIndex: 'id', 
  },
  {
    title: 'First Name',
    dataIndex: 'firstName', 
  },
  {
    title: 'last Name',
    dataIndex: 'lastName', 
  },
  {
    title: 'Email',
    dataIndex: 'email', 
  },
  {
    title: 'mobile',
    dataIndex: 'mobile',  
  } 
];
 
 
 
  function Actions(data : User[],changeData : (data : User[])=>void){
   
   
    return {
      title: 'Operations',
      dataIndex: '', 
      render: (row : User) => { 
       
        const handleDelete = async()=>{
           
          try{
            await deleteUser(row.id as string);
            const newData = data.filter((currentRow : User)=>currentRow.id !== row.id) 
            changeData(newData);
            toast.success('user deleted successfuly')
          }catch(err : any){
            toast.error(err.message);
          }

        }

    

        return (
          <div className='space-x-3 flex '>
            <NavLink to={`/edit/user/${row.id}`} className='btn-sm btn primary contained'>Update</NavLink>
            <Button className='btn-sm' variantColor='danger' href='#' onClick={handleDelete}>Delete</Button> 
         </div>
        )
      }
    }
  }


const UsersView = () => {
 

  const [users,setUsers] = useState<User[]>([]);
  const columns = useMemo(()=>[...COLS,Actions(users,setUsers)],[users])
 

  useEffect(()=>{

    (async()=>{
        try{
          const users = await getUsers();
          setUsers(users)
        }catch(err : any){
          toast.error(err.message)
        }
    })();
    
  },[])

  
  return (
    <div>
      <ToastContainer />
      <Table columns={columns} rows={users} title='Users Data' rowKey='id'/>
    </div>
   
  )
}


 

export default UsersView
