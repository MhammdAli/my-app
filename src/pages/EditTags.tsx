import React from 'react'
import Button from 'components/Button';
import Center from 'components/Center';
import Input from 'components/Input';
import { FaComment,  FaTag } from 'react-icons/fa';
import TextArea from 'components/TextArea';


const EditTags = (props : any) => {


  return (
     <Center>
        <form className='md:w-10/12 w-11/12'>
           <div className='space-y-3'>
              <h1 className='dark:text-textColor-dark md:text-5xl text-3xl py-2'>Edit Tag</h1>
           
              <Input startIcon={<FaTag/>} placeholder='Tag Name'/>
              <TextArea rows={3} StartIcon={<FaComment size={15}/>} placeholder='description' />
             
              <div className='flex justify-end'>
                <Button StartIcon={<FaTag/>} title='Edit Tag' type='submit' />
              </div>
           </div>
        </form> 
     </Center>
  )
}

export default EditTags
