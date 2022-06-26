import Center from 'components/Center'
import React from 'react'

import NotFoundImage from 'assets/notFound.png'

function NotFound() {
  return (
    <Center className='dark:text-white space-y-5 '>
        <img src={NotFoundImage} alt='Not Found Page' className='w-80 h-40'/>
       <h1 className='text-5xl'>404 Not Found</h1>
    </Center>
  )
}

export default NotFound
