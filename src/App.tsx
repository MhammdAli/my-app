import SideBar from 'components/SideBar'; 
import { useTheme } from 'hooks/useTheme';
import NotFound from 'pages/404';
import CreatePost from 'pages/CreatePosts';
import CreateTags from 'pages/CreateTags';
import CreateUser from 'pages/CreateUser';
import EditPost from 'pages/EditPost';
import EditTags from 'pages/EditTags';
import EditUser from 'pages/EditUser'; 
import Home from 'pages/Home';
import PostsView from 'pages/PostsView';
import TagsView from 'pages/TagsView';
import UsersView from 'pages/UsersView';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

 
 

function App() {

  const {mode} = useTheme();

  return (
    <div className={`App ${mode}`}>

         <SideBar/>
    
         <div className='layout'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/create/user' element={<CreateUser/>}/>
              <Route path='/create/post' element={<CreatePost/>}/>
              <Route path='/create/tag' element={<CreateTags/>}/>
              <Route path='/Edit/tag/:id' element={<EditTags/>}/>
              <Route path='/Edit/post/:id' element={<EditPost/>}/>
              <Route path='/Edit/user/:id' element={<EditUser/>}/>
              <Route path='/users' element={<UsersView/>}/>
              <Route path='/posts' element={<PostsView/>}/> 
              <Route path='/tags' element={<TagsView/>}/> 
              <Route path='*' element={<NotFound/>}/>
            </Routes>
         </div>
         
    </div>
  );
}

export default App;
