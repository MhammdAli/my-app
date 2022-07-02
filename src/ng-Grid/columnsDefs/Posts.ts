import { ColDef } from "ag-grid-community";
import { format } from "date-fns";
import DeletePostComp from "ng-Grid/DeletePostComp";


export const COLS : any[]= [
    {
      headerName: 'Post Details', 
      children: [
        { field: 'id' , headerName : 'Post id' ,  maxWidth : 100 ,   },
        { field: 'description', headerName : 'description' , flex : 1 },
        { field: 'title', headerName : 'Title' },
        { field: 'postedDate',
          headerName : 'Posted Date' ,
          filter : 'agDateColumnFilter' ,
          filterParams : {
            browserDatePicker: true, 
            suppressAndOrCondition: true,
            comparator: (localDate : any, cellValue : any) => {
              if (cellValue == null) {
                return 0;
              } 
            
              cellValue = format(new Date(cellValue),'MM/dd/yyyy') 
              
              var dateParts = cellValue.split('/');
              
              var year = Number(dateParts[2]); 
              var month = Number(dateParts[1]) - 1; 
              var day = Number(dateParts[0]); 
              var cellDate = new Date(year, month, day);
  
              if (cellDate < localDate) {
                return -1;
              } else if (cellDate > localDate) {
                return 1;
              } else {
                return 0;
              }
            }
          },
         valueFormatter: function (params : any) {
          return format(new Date(params.value),'MM/dd/yyyy');
         }, 
      }
      ] 
    },  
    {
      headerName: 'Author Details',
      children: [
        { field: 'author.id' },
        { field: 'author.firstName', columnGroupShow: 'open' },
        { field: 'author.lastName', columnGroupShow: 'open' },
        { field: 'author.email', columnGroupShow: 'open' },
        { field: 'author.mobile', columnGroupShow: 'open' },
      ]  
    },
    {
      headerName : 'Actions',
      editable: false,
      cellRenderer : DeletePostComp
    }
  ];
  
  
export const CommonColDefs : ColDef = { 
     sortable : true,
     filter : true,
     resizable : true, 
     minWidth : 300
}