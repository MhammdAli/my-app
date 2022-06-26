import React from 'react'
import Button from 'components/Button';
import Center from 'components/Center';
import Input from 'components/Input';
import { FaMailBulk, FaMobile, FaUser } from 'react-icons/fa';


const CreateUser = (props : any) => {


  return (
     <Center>
        <form className='md:w-10/12 w-11/12'>
           <div className='space-y-3'>
              <h1 className='dark:text-textColor-dark md:text-5xl text-3xl py-2'>Create User</h1>
           
              <Input startIcon={<FaUser/>} placeholder='Enter Your FirstName'/>
              <Input  startIcon={<FaUser/>} placeholder='Enter Your LastName'/>
              <Input  startIcon={<FaMailBulk/>} placeholder='Enter Your Email' type='email'/>
              <Input  startIcon={<FaMobile/>} placeholder='Enter Your Mobile' type='number' />

              <div className='flex justify-end'>
                <Button StartIcon={<FaUser/>} title='Create User' type='submit' />
              </div>
           </div>
        </form> 
     </Center>
  )
}

export default CreateUser
