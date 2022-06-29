import React from 'react'
import Center from 'components/Center'

interface ErrorProps extends Pick<React.ImgHTMLAttributes<'img'>,'src'> {
    message ?: string, 
}

const Error : React.FC<ErrorProps> = ({message,src}) => {
  return (
     <Center className='space-y-3'>
         <img src={src} className='w-[50%] object-cover h-60' alt='error' />
         <h1 className='dark:text-white text-5xl'>{message}</h1>
     </Center>
  )
}

export default Error
