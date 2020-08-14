import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <PostForm/>
      <hr></hr>
      <PostList/>
      
    </div>
  );
}

export default App;
