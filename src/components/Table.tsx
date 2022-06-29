import React from 'react'
import Center from 'components/Center'
import Table from 'rc-table'
interface TableProps  {
    columns : any,
    rows : any,
    title : string,
    rowKey ?: string
}

function GridData(props : TableProps) {
  return (
    <Center className='content-center space-y-5'>
        <h1 className='text-5xl dark:text-white self-start'>{props.title}</h1>
       <Table  className='w-full mx-2 overflow-x-auto' columns={props.columns} data={props.rows} rowKey={props.rowKey}  /> 
    </Center>
  )
}

export default GridData
