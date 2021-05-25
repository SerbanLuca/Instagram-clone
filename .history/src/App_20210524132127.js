import './App.css';
import Post from './components/Post'


function App() {
  return (
    <div className="app">
      <div className='app__header'>
          <img className='app__headerImage' src='https://cdn.shopify.com/s/files/1/0249/5892/6941/products/stickerirononInstagram-Logo_3840x.png?v=1615134485' alt=''/>
      </div>
      <h1>New feed</h1>
      <Post username='kingjames' caption='#JustakidfromAkron' imageURL='https://phantom-marca.unidadeditorial.es/e575a49e04a2d928a04e1c7b9cac86e7/resize/1320/f/jpg/assets/multimedia/imagenes/2021/04/01/16172885845670.jpg'/>
      <Post username='JHarden13' caption='Nets in 7' imageURL='https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2021/02/GettyImages-1230991215.jpg'/>
      <Post username='AnthDavis3' caption='Lakers in 6' imageURL='https://sircharlesincharge.com/wp-content/uploads/getty-images/2017/07/1180610069.jpeg'/>

    </div>
  );
}

export default App;
