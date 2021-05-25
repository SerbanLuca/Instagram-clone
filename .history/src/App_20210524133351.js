import './App.css';
import Post from './components/Post'
import React, {useState} from 'react'


function App() {
  
  const [posts, setPosts] = useState([
    {
      username:'kingjames',
      caption:'#JustakidfromAkron',
      imageURL:'https://phantom-marca.unidadeditorial.es/e575a49e04a2d928a04e1c7b9cac86e7/resize/1320/f/jpg/assets/multimedia/imagenes/2021/04/01/16172885845670.jpg'
    },
    {
      username:'JHarden13',
      caption:'Nets in 7',
      imageURL:'https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2021/02/GettyImages-1230991215.jpg'
    }
  ])
  
  return (
    <div className="app">
      <div className='app__header'>
          <img className='app__headerImage' src='https://cdn.shopify.com/s/files/1/0249/5892/6941/products/stickerirononInstagram-Logo_3840x.png?v=1615134485' alt=''/>
      </div>
      <h1>New feed</h1>
      {
        posts.map((post) => (
          <Post username={post.username} caption={post.caption} imageURL={post.imageURL}/>
        ))
      }
    </div>
  );
}

export default App;
