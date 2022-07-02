import { useMemo, useState } from 'react'
import Button from 'components/Button';
import Center from 'components/Center';
import Input from 'components/Input';
import { FaBlog, FaClock, FaComment, FaHeading, FaTags, FaUser } from 'react-icons/fa';
import TextArea from 'components/TextArea';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { CustomSelect } from 'components/CustomSelect';
import {createPost,Post} from 'services/Posts';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import useTags from 'hooks/useTags';
import useUsers from 'hooks/useUsers';
import { createPostValidationSchema } from 'Validations';
 
interface Options {
  value ?: number | undefined,
  label ?: string  
}

const CreatePosts = (props : any) => {
 
  const [loading , setLoading] = useState<boolean>(false);
  const [usersOptions,setUsers] = useState< Options[]>([]);
 
  const {Tags} = useTags();
  const {Users} = useUsers();
  const handleSubmit = async (post : Post,helpers : FormikHelpers<Post> )=>{ 
    setLoading(true);
    try{
       await createPost(post)
       toast.success('Post Added Successfuly') 
       helpers.resetForm();
    }catch(err : any ){ 
       toast.error('somthing went wrong')   
    }finally{
      setLoading(false);
    }

  }

  useMemo(()=>{
    const users : Options[] = Users.map(({id,firstName,lastName})=>({value : id,label : `${firstName} ${lastName}` })) as Options[]
    setUsers(users) 
  },[Users])

 
  return (
     <Center>
        <div className='md:w-10/12 w-11/12'>
           <div className='space-y-3'>
              <h1 className='dark:text-textColor-dark md:text-5xl text-3xl py-2'>Create Post</h1>
                <ToastContainer/>
                <Formik
                    initialValues={{
                      title : '',
                      description : '',
                      postedDate : '', 
                      tagIds : [],
                      userId : '' 
                    }}
                    onSubmit={handleSubmit} 
                    validationSchema={createPostValidationSchema} 
                >
                {( props )=>(
                 <Form method='POST' className='space-y-3'>
             
                    <Field as={Input} startIcon={<FaHeading/>} name='title'  placeholder='Enter Your Title' error={!!props.errors.title && props.touched.title} errorText={props.errors.title}/>
                    <TextArea value={props.values.description} onChange={props.handleChange} rows={3} StartIcon={<FaComment size={15}/>} placeholder='description' name='description' error={!!props.errors.description && props.touched.description} errorText={props.errors.description} />
                    <Field as={Input} name='postedDate' startIcon={<FaClock/>}  placeholder='Posted Date' type='date' error={!!props.errors.postedDate && props.touched.postedDate} errorText={props.errors.postedDate} />
                   
                    <Field 
                        name="userId"
                        options={usersOptions}
                        component={CustomSelect} 
                        placeholder="Select Owner"  
                        error={!!props.errors.userId && !!props.touched.userId}
                        errorText={props.errors.userId}
                        startIcon={<FaUser/>}
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
                      <Button StartIcon={<FaBlog/>} title='Create Post' type='submit' loading={loading} disabled={loading} />
                    </div>
                </Form>
            )}
        </Formik>
           </div>
        </div> 
     </Center>
  )
}

export default CreatePosts
