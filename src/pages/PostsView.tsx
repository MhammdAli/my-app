import { useCallback } from 'react'
import { getPosts } from 'services/Posts';
import { toast, ToastContainer } from 'react-toastify'; 
import Center from 'components/Center';
import { AgGridReact } from 'ag-grid-react';
import { GridReadyEvent } from 'ag-grid-community';
import { useTheme } from 'hooks/useTheme';
import {COLS,CommonColDefs} from 'ng-Grid/columnsDefs/Posts';
 


const PostsView = () => {

  const {mode} = useTheme();

 
  const gridReady = useCallback(async (event: GridReadyEvent)=>{ 
    try{
      const Posts = await getPosts();
      event.api.setRowData(Posts) 
    }catch(err : any){
      toast.error(err?.message)
    } 
  },[])

  return (
    <Center>
      <ToastContainer/> 
      <h1 className='dark:text-white text-black text-4xl my-4'>Post View</h1>
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


 

export default PostsView
