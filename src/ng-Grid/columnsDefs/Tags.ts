import { ColDef } from "ag-grid-community";
import DeleteTagComp from "ng-Grid/DeleteTagComp";

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
      headerName : 'Tag Name',
      field : 'name',
      minWidth : 20
    },
    {
      headerName : 'Tag Description',
      field : 'description',
      tooltipField : 'description',
      flex : 1
    },
    {
      headerName : 'Actions',
      editable: false,
      cellRenderer : DeleteTagComp
    } 
];
  