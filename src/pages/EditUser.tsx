/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Button from 'components/Button';
import Center from 'components/Center';
import Input from 'components/Input';
import { FaMailBulk, FaMobile, FaUser } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { User , updateUser, getUserById } from 'services/users';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { toast , ToastContainer } from 'react-toastify';
import {ErrorNotFound} from 'Types/index'
import Error from 'components/Error';
import SearchImage from 'assets/Search.png' 
import axios from 'axios';
import Spinner from 'components/Spinner';
import { createUserValidationSchema } from 'Validations';


const EditUser = (props : any) => {

  const [user,setUser] = useState<User>();
  const [error,SetError] = useState<ErrorNotFound>();
  const {id} = useParams();
  const [loading , setLoading] = useState<boolean>(true); 
  const [loadBtn , setLoadingBtn] = useState<boolean>(false);

  useEffect(()=>{
      (async ()=>{
         try{
            const user = await getUserById(id as string); 
            setUser(user)
         }catch(err : any){
            if(axios.isAxiosError(err)){
               if(err.response?.status === 404){ 
                 return SetError({message : 'User Not Exists' })
               }
             }
             toast.error(err.message)
         }finally{
            setLoading(false);
         }
      })();
   },[])

  const handleSubmit = async (user : User ,helpers : FormikHelpers<User> )=>{ 
   
        setLoadingBtn(true);
      try{
         await updateUser(id as string,{...user,id})
         toast.success('User Updated Successfuly')
         setUser({...user,id})
      }catch(err : any ){   
         toast.error(err.message)
      }finally{
         setLoadingBtn(false);
      }

  } 

  if(loading) return <Spinner/>
  if(error) return <Error message={error.message} src={SearchImage}/>


  return (
     <Center>
        <ToastContainer/>
        <div className='md:w-10/12 w-11/12'>
           <div className='space-y-3'>
              <h1 className='dark:text-textColor-dark md:text-5xl text-3xl py-2'>Update User</h1>
               
              <Formik
                initialValues={{
                  email : user?.email || '',
                  firstName : user?.firstName ||'',
                  lastName : user?.lastName ||'',
                  mobile : user?.mobile ||''
                }}
                enableReinitialize
                onSubmit={handleSubmit}
                validationSchema={createUserValidationSchema}  
            >
            {( props )=>(
             <Form method='POST' className='space-y-3'>
 
               <Field as={Input} startIcon={<FaUser/>} placeholder='Enter Your FirstName' name='firstName' error={!!props.errors.firstName && props.touched.firstName} errorText={props.errors.firstName}/>
               <Field as={Input} startIcon={<FaUser/>} placeholder='Enter Your LastName' name='lastName'  error={!!props.errors.lastName && props.touched.lastName} errorText={props.errors.lastName} />
               <Field as={Input} startIcon={<FaMailBulk/>} placeholder='Enter Your Email' type='email' name='email'  error={!!props.errors.email && props.touched.email} errorText={props.errors.email}  />
               <Field as={Input} startIcon={<FaMobile/>} placeholder='Enter Your Mobile' name='mobile'  error={!!props.errors.mobile && props.touched.mobile} errorText={props.errors.mobile}  /> 
               
               <div className='flex justify-end'>
                  <Button StartIcon={<FaUser/>} title='Edit User' type='submit' loading={loadBtn} disabled={loadBtn} />
               </div>

              </Form>
        )}
    </Formik>
           </div>
        </div> 
     </Center>
  )
}

export default EditUser
