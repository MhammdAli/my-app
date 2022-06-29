import React, { useState } from 'react'
import Button from 'components/Button';
import Center from 'components/Center';
import Input from 'components/Input';
import { FaComment,  FaTag } from 'react-icons/fa';
import TextArea from 'components/TextArea';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import {createTag,Tag} from 'services/Tags';
import {ToastContainer,toast} from 'react-toastify';
import {createTagValidationSchema} from 'Validations/index'
const CreateTags = () => {

   const [loading , setLoading] = useState<boolean>(false);
   
   const handleSubmit = async (tag : Tag,helpers : FormikHelpers<Tag>)=>{
      
      setLoading(true);
      try{
         await createTag(tag)
         toast.success('Tag Added Successfuly') 
         helpers.resetForm();
      }catch(err : any){
         toast.error('somthing went wrong!!') 
      }finally{
          setLoading(false);
      }
   }

  return (
     <Center>
        <ToastContainer/>
        <div className='md:w-10/12 w-11/12'>
           <div className='space-y-3'>
              <h1 className='dark:text-textColor-dark md:text-5xl text-3xl py-2'>Create Tag</h1>
               <Formik
                  initialValues={{
                     name : '',
                     description : ''
                  }}
                  onSubmit={handleSubmit} 
                  validationSchema={createTagValidationSchema}
               >
                  {( props )=>(
                     <Form  method='POST' className='space-y-3'>

   
                        <Field as={Input} name='name' startIcon={<FaTag/>} placeholder='Tag Name' error={!!props.errors.name} errorText={props.errors.name}/>
                        <TextArea value={props.values.description} onChange={props.handleChange} rows={3} StartIcon={<FaComment size={15}/>} placeholder='description' name='description'  error={!!props.errors.description && props.touched.description} errorText={props.errors.description}  />
                    
                        <div className='flex justify-end'>
                           <Button StartIcon={<FaTag/>} title='Create Tag' type='submit' loading={loading} disabled={loading} />
                        </div>
                        
                     </Form>
                  )}
              </Formik>
           </div>
        </div> 
     </Center>
  )
}

export default CreateTags
