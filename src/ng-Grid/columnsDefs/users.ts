import { ColDef } from "ag-grid-community";
import DeleteUserComp from "ng-Grid/DeleteUserComp";

export const CommonColDefs : ColDef = { 
    sortable : true,
    filter : true,
    resizable : true, 
    minWidth : 300
}

export const COLS : ColDef[] = [
    {
      headerName: 'Id',
      field: 'id',
      maxWidth : 100
    },
    {
      headerName : 'First Name',
      field : 'firstName',
      minWidth : 20
    },
    {
      headerName : 'Last Name',
      field : 'lastName',
      tooltipField : 'description',
      flex : 1
    },
    {
      headerName : 'Email',
      field : 'email',
      tooltipField : 'description',
      flex : 1
    },
    {
      headerName : 'Mobile',
      field : 'mobile',
      tooltipField : 'description',
      flex : 1
    },
    {
      headerName : 'Actions',
      editable: false,
      cellRenderer : DeleteUserComp 
    } 
  ];