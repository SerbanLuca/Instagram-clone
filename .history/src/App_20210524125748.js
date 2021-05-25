import './App.css';
import Post from './components/Post'


function App() {
  return (
    <div className="app">
      <div className='app__header'>
          <img className='app__headerImage' src='https://cdn.shopify.com/s/files/1/0249/5892/6941/products/stickerirononInstagram-Logo_3840x.png?v=1615134485' alt=''/>
      </div>
      <h1>New feed</h1>
      <Post />
    </div>
  );
}

export default App;
