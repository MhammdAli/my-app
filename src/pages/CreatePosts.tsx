import React, { useState } from 'react'
import Button from 'components/Button';
import Center from 'components/Center';
import Input from 'components/Input';
import { FaBlog, FaClock, FaComment, FaHeading, FaUser } from 'react-icons/fa';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import TextArea from 'components/TextArea';

const animatedComponents = makeAnimated();
  

const SampleData = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

const CreatePost = (props : any) => {

  const [selectedOption, setSelectedOption] = useState(null);

  // Just For Testing
  const handleChange = (selectedOption : any) => {
    setSelectedOption(selectedOption)
    console.log(selectedOption)
  };

  return (
     <Center>
        <form className='md:w-10/12 w-11/12'>
           <div className='space-y-3'>
              <h1 className='dark:text-textColor-dark md:text-5xl text-3xl py-2'>Create Post</h1>
           
              <Input startIcon={<FaHeading/>} placeholder='Enter Your Title'/>
              <TextArea rows={3} StartIcon={<FaComment size={15}/>} placeholder='description' />
              <Input  startIcon={<FaUser/>} placeholder='Author Id'/>
              <Input  startIcon={<FaClock/>} placeholder='Posted Date' type='date'/>
             
              <Select
                value={selectedOption}
                onChange={handleChange}
                options={SampleData}
                isMulti
                components={animatedComponents}
                placeholder='Select Tags'  
              />

              <div className='flex justify-end'>
                <Button StartIcon={<FaBlog/>} title='Create Post' type='submit' />
              </div>

           </div>
        </form> 
     </Center>
  )
}

export default CreatePost
