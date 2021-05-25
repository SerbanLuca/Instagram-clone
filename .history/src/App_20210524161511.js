import './App.css';
import Post from './components/Post'
import React, {useState, useEffect} from 'react'
import {db} from './firebase'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [posts, setPosts] = useState([])
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()})))
    })
  },[])

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
            <h1>I am a modal</h1>
            <SimpleModal />
        </div>
      </Modal>

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
