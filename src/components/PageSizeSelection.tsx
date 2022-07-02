/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, useMemo, useState } from 'react'
import Select, { ActionMeta, SingleValue, Theme } from 'react-select'
 
export interface ISelectOptions {
    readonly label : string,
    readonly value : string
}

interface PageSizeSelectionPrps{
    onPageSizeChange : (pageSize : number)=>void,
    pageSize ?: number[],
    defaultValue ?: number,
    className ?: string
}

function setOption(value : number) : ISelectOptions {
   return {label : value.toString(),value : value.toString()}
}
 
 
const PageSizeSelection : React.FC<PageSizeSelectionPrps> = ({defaultValue = 10 ,onPageSizeChange,pageSize = [10,20,30],className}) => {
  
  
  const values = useMemo(()=>pageSize.map((value)=>setOption(value)),[pageSize])
  const [value , setValue] = useState(pageSize.includes(defaultValue) ? defaultValue : pageSize[0]);
 
    const handleChange = useCallback((newValue: SingleValue<number | ISelectOptions>, actionMeta: ActionMeta<number | ISelectOptions>)=>{
            const selectedValue : number = typeof newValue === 'number' ? newValue : Number(newValue?.value)
            setValue(selectedValue)
            if(!!onPageSizeChange){ 
            onPageSizeChange(selectedValue) 
            }
    },[value])
 
  return (
    <div>
      <Select
          options={values}
          value={setOption(value)}
          onChange={handleChange}
          className={`flex items-center space-x-2 ${className}`}
          theme={(theme : Theme)=>{return {...theme,borderRadius : 0}}}
        />
    </div>
  )
}

export default memo(PageSizeSelection)
