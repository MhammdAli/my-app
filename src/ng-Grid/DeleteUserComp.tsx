/* eslint-disable react-hooks/exhaustive-deps */
import { ICellRendererParams } from 'ag-grid-community'
import classNames from 'classnames'
import Button from 'components/Button'  
import { useCallback, useState } from 'react'
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { NavLink } from 'react-router-dom' 
import { deleteUser } from 'services/users'
const DeleteUserComp = (props : ICellRendererParams) => {
    const {id} = props.data
    const [confirm , showConfirmMessage] = useState<boolean>(false);
    const [loading , setLoading] = useState<boolean>(false);
    const handleDeleteRow = useCallback(async ()=>{ 
      showConfirmMessage(true)
    },[])

   const onAccepted = useCallback(async ()=>{
      try{
        setLoading(true)
        await deleteUser(id);
        props.api.applyTransaction({
          remove : [props.data]
        })
          
      }catch(err){ 
        console.log(err)
      }finally{
        setLoading(false)
        showConfirmMessage(false)
      }
   },[])

   const onCancel = useCallback(()=>{
       showConfirmMessage(false);
   },[])

    return (
      <div className='space-x-2 items-center flex justify-center h-full'>
        {!confirm ?
          <>
            <Button className='px-3' variantColor='danger' href='#' onClick={handleDeleteRow}><FaTrash/></Button>
            <NavLink to={`/edit/user/${id}`} className='px-3 btn primary contained'><FaEdit/></NavLink>
          </> 
        :
          <>
           <Button StartIcon={ <FaCheck/>} disabled={loading} loading={loading} className={classNames('bg-green-600 active:ring active:ring-green-400 text-white')} variant='none' onClick={onAccepted} hiddenText={true} />
           <Button className={classNames({'hidden' : loading})} onClick={onCancel} variantColor='primary'>
              <AiFillCloseCircle />
           </Button>
          </>
        }
      </div>
    )
}

export default DeleteUserComp
