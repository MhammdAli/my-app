import React from 'react'
import Table from 'rc-table' 
import Button from 'components/Button';
import Center from 'components/Center';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'fname',  
  },
  {
    title: 'last Name',
    dataIndex: 'last_name',
    key: 'lname', 
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email', 
  },
  {
    title: 'mobile',
    dataIndex: 'mobile',
    key: 'mobile', 
  },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'operations',
    render: () => <div className='space-x-3 flex '>
      <Button className='p-2 text-sm flex-1 text-center block' href='#'>Update</Button>
      <Button className='p-2 text-sm flex-1 text-center block' variantColor='danger' href='#'>Delete</Button>
      <Button className='p-2 text-sm flex-1 text-center block' variantColor='secondary' href='#'>View</Button>
    </div>,
  },
];

const data = [
    { first_name: 'Jack', last_name: 'Json', email: 'jack@gmail.com',mobile : '7972837283', key: '1' },
    { first_name: 'Rose', last_name : 'Mousia', email: 'Rose@gmail.com',mobile : '7972837283', key: '2' },
    { first_name: 'Jack', last_name: 'Json', email: 'jack@gmail.com', mobile : '7972837283',key: '3' },
    { first_name: 'Rose', last_name : 'Mousia', email: 'Rose@gmail.com', key: '4' , mobile : '7972837283'},
  ];
  

const UsersView = () => {
  return (
    <Center className='content-center'>
        <h1 className='text-5xl dark:text-white'>Users Data</h1>
       <Table  className='w-full md:w-[77%] m-auto overflow-x-auto' columns={columns} data={data} /> 
    </Center>
  )
}


 

export default UsersView
