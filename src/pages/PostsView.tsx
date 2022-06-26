import React from 'react'
import Table from 'rc-table' 
import Button from 'components/Button';
import Center from 'components/Center';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',  
  },
  {
    title: 'posted Date',
    dataIndex: 'posted_date',
    key: 'posted_date', 
  },
  {
    title: 'AuthorId',
    dataIndex: 'author_id',
    key: 'author_id', 
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
    { title: 'Jack', posted_date: 'Mon.08.2039',author_id:1, key: '1' },
    { title: 'Rose', posted_date : 'Mon.08.2039',author_id:2, key: '2' },
    { title: 'Jack', posted_date: 'Mon.08.2039',author_id:3, key: '3' },
    { title: 'Rose', posted_date : 'Mon.08.2039',author_id:4, key: '4' },
  ];
  

const PostsView = () => {
  return (
    <Center className='content-center'>
        <h1 className='text-5xl dark:text-white'>Posts Data</h1>
       <Table  className='w-full md:w-[77%] m-auto overflow-x-auto' columns={columns} data={data} /> 
    </Center>
  )
}


 

export default PostsView
