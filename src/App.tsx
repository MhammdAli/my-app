import Button from 'components/Button';
import Input from 'components/Input';
import SideBar from 'components/SideBar';
import Toggle from 'components/Toggle';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = ()=>{
  return (
    <h1>Hello From Home</h1>
  )
}

const CreateUser = ()=>{
  return (
    <h1>Create User</h1>
  )
}

const NotFound = ()=>{
  return (
    <h1>Not Found</h1>
  )
}

function App() {
  return (
    <div className="App">
         <SideBar/>

         <div className='layout'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create/user' element={<CreateUser/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
