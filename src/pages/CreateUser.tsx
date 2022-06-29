import React, { useState } from 'react'
import Button from 'components/Button';
import Center from 'components/Center';
import Input from 'components/Input';
import { FaMailBulk, FaMobile, FaUser } from 'react-icons/fa';
import {Field, Form, Formik, FormikHelpers} from 'formik'; 
import {createUser,User} from 'services/users';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { createUserValidationSchema } from 'Validations';

const CreateUser = (props : any) => {

  
   const [loading , setLoading] = useState<boolean>(false);
 

   const handleSubmit = async (user : User,helpers : FormikHelpers<User>)=>{
      console.log(user)
      setLoading(true);
      try{
         await createUser(user)
         toast.success('user Added Successfuly')
         helpers.resetForm();
      }catch(err : any){
         toast.error('somthing went wrong!!!') 
      }finally{
          setLoading(false);
      }

   }

  return (
     <Center>
        <div className='md:w-10/12 w-11/12'>
           <div className='space-y-3'>
              <h1 className='dark:text-textColor-dark md:text-5xl text-3xl py-2'>Create User</h1>
               <ToastContainer/>
             
               <Formik
                  initialValues={{
                     firstName : '',
                     email : '',
                     lastName : '',
                     mobile : ''
                  }}
                  onSubmit={handleSubmit}
                  validationSchema={createUserValidationSchema}  
               >
                {( props )=>(
                   <Form method='POST' className='space-y-3'> 

                     <Field as={Input} startIcon={<FaUser/>} placeholder='Enter Your FirstName' name='firstName' error={!!props.errors.firstName && props.touched.firstName} errorText={props.errors.firstName} />
                     <Field as={Input} startIcon={<FaUser/>} placeholder='Enter Your LastName' name='lastName' error={!!props.errors.lastName && props.touched.lastName} errorText={props.errors.lastName} />
                     <Field as={Input} startIcon={<FaMailBulk/>} placeholder='Enter Your Email' type='email' name='email' error={!!props.errors.email && props.touched.email} errorText={props.errors.email}  />
                     <Field as={Input} startIcon={<FaMobile/>} placeholder='Enter Your Mobile' name='mobile' error={!!props.errors.mobile && props.touched.mobile} errorText={props.errors.mobile}  /> 

             
                     <div className='flex justify-end'>
                        <Button StartIcon={<FaUser/>} title='Create User' type='submit' loading={loading} disabled={loading} />
                     </div> 

                  </Form>
               )}
            </Formik>
           </div>
        </div> 
     </Center>
  )
}

export default CreateUser
