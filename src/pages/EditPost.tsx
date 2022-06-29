import React, { useEffect, useState } from 'react'
import Button from 'components/Button';
import Center from 'components/Center';
import Input from 'components/Input';
import { FaBlog, FaClock, FaComment, FaHeading, FaTags, FaUser } from 'react-icons/fa';
import TextArea from 'components/TextArea';
import { toast, ToastContainer } from 'react-toastify';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import useTags from 'hooks/useTags';
import useUsers from 'hooks/useUsers';
import { getPostById, Post, PostRes, updatePost } from 'services/Posts';
import { CustomSelect } from 'components/CustomSelect';
import { useParams } from 'react-router-dom';
import { formatDate, isDefined } from 'utilities/helper';
import axios from 'axios';
import Error from 'components/Error';
import SearchImage from 'assets/Search.png' 
import {ErrorNotFound} from 'Types/index'
import Spinner from 'components/Spinner';
import { createPostValidationSchema } from 'Validations';
 
const EditPost = () => {
 
   
  const {id} = useParams();
  const [loading , setLoading] = useState<boolean>(true);
  const [error,SetError] = useState<ErrorNotFound>();
  const [Post , setPost] = useState<PostRes>();
  const {Tags} = useTags();
  const {Users} = useUsers();
  const [loadBtn , setLoadingBtn] = useState<boolean>(false);

  const handleSubmit = async (post : Post,helpers : FormikHelpers<Post> )=>{ 
      setLoadingBtn(true);
    try{
       await updatePost(id as string,{...post,id} )
       toast.success('Post Updated Successfuly') 
    }catch(err : any ){   
      toast.error(err.message)
    }finally{
      setLoadingBtn(false);
    }

  }

  useEffect(()=>{

    (async ()=>{
       try{ 
          const Post = await getPostById(id as string);
          setPost({
            ...Post,
            tagIds : Post.tags.map((value)=>value.id || ''), 
          })
       }catch(err : any){
          if(axios.isAxiosError(err)){
            if(err.response?.status === 404){
              return SetError({message : 'Post Not Exists' })
            }
          }
          toast.error(err.message)
       }finally{
          setLoading(false)
       }
    })();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

 
  if(loading) return <Spinner/>
  if(error) return <Error message={error.message} src={SearchImage}/>

  return (
    <Center>
    <div className='md:w-10/12 w-11/12'>
       <div className='space-y-3'>
          <h1 className='dark:text-textColor-dark md:text-5xl text-3xl py-2'>Edit Post</h1>
            <ToastContainer/> 
            <Formik
                initialValues={{
                  title : Post?.title || '',
                  description : Post?.description || '',
                  postedDate : isDefined(Post?.postedDate) ? formatDate(Post?.postedDate as string,'yyyy-MM-dd') : '',
                  tagIds : Post?.tagIds || [], 
                  userId : Post?.authorId || ''
                }}
                enableReinitialize
                onSubmit={handleSubmit} 
                validationSchema={createPostValidationSchema} 
            >
            {( props )=>(


             <Form method='POST' className='space-y-3'>
         
                <Field as={Input} startIcon={<FaHeading/>} name='title'  placeholder='Enter Your Title'  error={!!props.errors.title && props.touched.title} errorText={props.errors.title}/>
                <TextArea value={props.values.description} onChange={props.handleChange} rows={3} StartIcon={<FaComment size={15}/>} placeholder='description' name='description' error={!!props.errors.description && props.touched.description} errorText={props.errors.description} />
                <Field as={Input} name='postedDate' startIcon={<FaClock/>}  placeholder='Posted Date' type='date' error={!!props.errors.description && props.touched.postedDate} errorText={props.errors.postedDate} />
               
                <Field 
                    name="userId"
                    options={Users.map(({id , firstName,lastName})=>({value : id,label : `${firstName} ${lastName}` }))}
                    component={CustomSelect} 
                    placeholder="Select Owner"
                    startIcon={<FaUser/>} 
                    error={!!props.errors.userId}
                    errorText={props.errors.userId}
                />
 
                <Field 
                    name="tagIds"
                    options={Tags.map(({id,name})=>({value : id,label : name}))}
                    component={CustomSelect} 
                    placeholder="Select Tags" 
                    isMulti 
                    startIcon={<FaTags/>}
                /> 
                  
                <div className='flex justify-end'>
                  <Button StartIcon={<FaBlog/>} title='Edit Post' type='submit' loading={loadBtn} disabled={loadBtn} />
                </div>
            </Form>
        )}
    </Formik>
       </div>
    </div> 
 </Center>
  )
}

export default EditPost
