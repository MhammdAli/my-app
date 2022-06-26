import React from 'react'
import Table from 'rc-table' 
import Button from 'components/Button';
import Center from 'components/Center';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',  
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description', 
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
    { name: 'Jack', description: 'sample descr....', key: '1' },
    { name: 'Rose', description : 'sample descr....', key: '2' },
    { name: 'Jack', description: 'sample descr....', key: '3' },
    { name: 'Rose', description : 'sample descr....', key: '4' },
  ];
  

const TagsView = () => {
  return (
    <Center className='content-center'>
        <h1 className='text-5xl dark:text-white'>Users Data</h1>
       <Table  className='w-full md:w-[77%] m-auto overflow-x-auto' columns={columns} data={data} /> 
    </Center>
  )
}


 

export default TagsView
