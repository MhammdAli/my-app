import React from 'react' 
import HelperText from './HelperText'

//////////////////////////// TextArea Types //////////////////////////
interface TextAreaPorps extends React.TextareaHTMLAttributes<any> {
    rows ?: number,
    cols ?: number ,
    StartIcon ?: React.ReactNode,
    EndIcon ?: React.ReactNode,
    errorText ?: string,
    error ?: boolean,
    containerStyle ?: React.CSSProperties,
    helperTextStyle ?: React.CSSProperties 
}

////////////////////////////////////////////////////////////////////


const TextArea = React.forwardRef<HTMLTextAreaElement,TextAreaPorps>(({StartIcon,EndIcon,error,errorText,containerStyle,helperTextStyle,...rest},ref)=>{

    
    return (
       <div style={containerStyle}>
          {/* Start Icon */}
          <div className='flex'>
            {StartIcon &&
            <div className='flex items-center justify-center px-5 bg-primary-light text-white'>
                {StartIcon}
            </div> 
            }

            {/* TextArea */}
            <textarea className='resize-none w-full outline-none py-2 px-4 ' {...rest}></textarea>

            {/* End Icon */} 
            {EndIcon &&
                <div className='flex items-center justify-center px-5 bg-primary-light text-white'>
                {EndIcon}
                </div> 
            } 
        
          </div>
          {/** Helper Text For Handling Errors */}
          {!!error && <HelperText className='text-red-700  font-bold py-1' title={errorText} style={helperTextStyle} />}
   
       </div>
    )

})

export default TextArea;