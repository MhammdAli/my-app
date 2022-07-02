import React, { useCallback, useState } from 'react'
import {toast, ToastContainer} from 'react-toastify';
import {getUsers} from 'services/users'
import { AgGridReact } from 'ag-grid-react';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { useTheme } from 'hooks/useTheme'; 
import Center from 'components/Center';
import Input from 'components/Input';
import { FaSearch } from 'react-icons/fa'; 
import PageSizeSelection from 'components/PageSizeSelection';
import {COLS,CommonColDefs} from 'ng-Grid/columnsDefs/users'

const UsersView = () => {
 
  const {mode} = useTheme();
  const [gridApi,setGridApi] = useState<GridApi>();
  
  
  const gridReady = useCallback(async (event: GridReadyEvent)=>{ 
    setGridApi(event.api)
    try{
      const users = await getUsers();
      event.api.setRowData(users) 
    }catch(err : any){
      toast.error(err?.message)
    } 
 },[])




  const handleQuickFilter = useCallback(({target : {value : Value}} : any)=>{ 
    gridApi?.setQuickFilter(Value)  
  },[gridApi])
  

  const onPageSizeHandler = useCallback((pageSize : number)=>{
    gridApi?.paginationSetPageSize(pageSize)
  },[gridApi])

  return (
    <Center>
      <ToastContainer />
      <h1 className='dark:text-white text-black text-4xl my-2'>Users View</h1>
      <div className='flex w-full my-3'>
        <Input startIcon={<FaSearch/>} onChange={handleQuickFilter}/>
        <PageSizeSelection onPageSizeChange={onPageSizeHandler} />
      </div>

      <div
        className={`${mode === 'dark' ? 'ag-theme-alpine-dark' : 'ag-theme-alpine'} w-full`}
        style={{  
          height : 530,
        }}
      >
        <AgGridReact
          columnDefs={COLS}
          defaultColDef={CommonColDefs}
          onGridReady={gridReady}  
          enableBrowserTooltips 
          animateRows
          pagination 
          paginationPageSize={10} 
        /> 
      </div> 
    </Center>
   
  )
}


 

export default UsersView
