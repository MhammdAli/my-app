import React from 'react'

 
interface HelperTextProps extends Pick<React.HTMLAttributes<'p'>,'style'>  {
    title ?: React.ReactNode,
    className ?: string
}
const HelperText : React.FC<HelperTextProps> = ({title,...props}) => {
  return (
    <p {...props}>
       {title}
    </p>
  )
}

export default HelperText
