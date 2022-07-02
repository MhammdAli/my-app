import React, { useEffect, useState } from 'react'
import Button from 'components/Button';
import Center from 'components/Center';
import Input from 'components/Input';
import { FaComment,  FaIdBadge,  FaTag } from 'react-icons/fa';
import TextArea from 'components/TextArea';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import {getTagById, Tag, updateTag} from 'services/Tags';
import {ToastContainer,toast} from 'react-toastify';
import { useParams } from 'react-router-dom';
import {ErrorNotFound} from 'Types/index'
import Error from 'components/Error';
import SearchImage from 'assets/Search.png' 
import axios from 'axios';
import Spinner from 'components/Spinner';
import { createTagValidationSchema } from 'Validations';

const EditTags = () => {

   const [loading , setLoading] = useState<boolean>(true);
   const [error,SetError] = useState<ErrorNotFound>();
   const [tags,setTags] = useState<Tag>({})
   const {id} = useParams();
   const [loadBtn , setLoadingBtn] = useState<boolean>(false);
   useEffect(()=>{

      (async ()=>{
         try{
            const tag = await getTagById(id as string);
            setTags(tag)
         }catch(err : any){
            if(axios.isAxiosError(err)){
               if(err.response?.status === 404){
                 return SetError({message : 'Tag Not Exists' })
               }
             }
             toast.error(err.message)
         }finally{
            setLoading(false)
         }
      })();
      
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

   const handleSubmit = async ({description,name} : Tag,helpers : FormikHelpers<Tag>)=>{
      setLoadingBtn(true);
      try{
         const newTags = {id,description,name}
         await updateTag(id as string,newTags)
         toast.success('Tag Updated Successfuly') 
         setTags(newTags)
      }catch(err : any){
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
              <h1 className='dark:text-textColor-dark md:text-5xl text-3xl py-2'>Edit Tag</h1>
               <Formik
                  initialValues={{
                     name : tags.name || '', 
                     description : tags.description || ''
                  }}
                  enableReinitialize
                  onSubmit={handleSubmit} 
                  validationSchema={createTagValidationSchema}
               >
                  {( props )=>(
                     <Form  method='POST' className='space-y-3'>

                        <Field as={Input} value={tags.id||''} disabled startIcon={<FaIdBadge/>} name='id' placeholder='id' style={{backgroundColor : '#bababa'}}/>
                        <Field as={Input} name='name' startIcon={<FaTag/>} placeholder='Tag Name'  error={!!props.errors.name} errorText={props.errors.name} />
                        <TextArea value={props.values.description} onChange={props.handleChange}  rows={3} StartIcon={<FaComment size={15}/>} placeholder='description' name='description'  error={!!props.errors.description && props.touched.description} errorText={props.errors.description}  />
                    
                        <div className='flex justify-end'>
                           <Button StartIcon={<FaTag/>} title='Edit Tag' type='submit' loading={loadBtn} disabled={loadBtn} />
                        </div>
                        
                     </Form>
                  )}
              </Formik>
           </div>
        </div> 
     </Center>
  )
}

export default EditTags
