import './App.css';
import Post from './components/Post'
import React, {useState, useEffect} from 'react'
import {db} from './firebase'


function App() {
  
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()})))
    })
  },[])

  return (
    <div className="app">
      <div className='app__header'>
          <img className='app__headerImage' src='https://cdn.shopify.com/s/files/1/0249/5892/6941/products/stickerirononInstagram-Logo_3840x.png?v=1615134485' alt=''/>
      </div>
      <h1>New feed</h1>
      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageURL={post.imageURL}/>
        ))
      }
    </div>
  );
}

export default App;
