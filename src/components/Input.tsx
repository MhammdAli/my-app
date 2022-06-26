import React, { InputHTMLAttributes } from 'react'
import HelperText from 'components/HelperText'

///////////////////// Input Types ///////////////////////
interface InputProps extends InputHTMLAttributes<any> {
    startIcon ?: React.ReactNode,
    endIcon ?: React.ReactNode,
    errorText ?: string,
    error ?: boolean,
    containerStyle ?: React.CSSProperties,
    helperTextStyle ?: React.CSSProperties 
}
//////////////////////////////////////////////////

const Input = React.forwardRef<HTMLInputElement,InputProps>(({endIcon,startIcon,errorText,error,containerStyle,helperTextStyle,...reset},ref)=>{

    return (
        <div style={containerStyle}> 
            <div className='input flex'>

               {!!startIcon &&
                    <div className='flex items-center justify-center bg-primary-light px-5 text-white'>
                    {startIcon} 
                    </div>
                }
                
                <input placeholder='Enter EMail' className='w-full py-2 px-5 outline-none' {...reset} ref={ref} />
    
                {!!endIcon &&
                    <div className='flex items-center justify-center bg-primary-light px-5 text-white'>
                    {endIcon} 
                    </div>
                }
    
            </div>
    
            {!!error && <HelperText className='text-red-700  font-bold py-1' title={errorText} style={helperTextStyle} />}
            
        </div>
    )

})
 
export default Input
