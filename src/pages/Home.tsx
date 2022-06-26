import Center from 'components/Center'
import React from 'react'
import { FaHandRock } from 'react-icons/fa'

function Home() {
  return (
    <Center className='dark:text-white space-y-3'>
        <h1>Welcome To My Application</h1>
        <FaHandRock size={30}/>
    </Center>
  )
}

export default Home
