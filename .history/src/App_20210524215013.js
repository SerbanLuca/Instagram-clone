import './App.css';
import Post from './components/Post'
import React, {useState, useEffect} from 'react'
import {auth, db} from './firebase'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import ImageUpload from './components/ImageUpload';

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
  const [modalStyle] = useState(getModalStyle);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [openSignIn, setOpenSignIn] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //user has logged in
        console.log(authUser)
        setUser(authUser)
      }
      else{
        //the user has logged out
        setUser(null)
      }
    })
    return () => { 
      unsubscribe()
    }
  },[user, username])

  useEffect(() => {
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()})))
    })
  },[])

  const signUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message))
    setOpen(false)
  }

  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))
    setOpenSignIn(false)
  }


  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className='app__signup'> 
            <center>
              <img src='https://cdn.shopify.com/s/files/1/0249/5892/6941/products/stickerirononInstagram-Logo_3840x.png?v=1615134485' alt='' className='app__headerImage'/>
              <Input placeholder='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
              <Input placeholder='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button onClick={signUp}>Sign Up</Button>
            </center>
          </form>
        </div>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className='app__signup'> 
            <center>
              <img src='https://cdn.shopify.com/s/files/1/0249/5892/6941/products/stickerirononInstagram-Logo_3840x.png?v=1615134485' alt='' className='app__headerImage'/>
              <Input placeholder='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button onClick={signIn}>Sign In</Button>
            </center>
          </form>
        </div>
      </Modal>
      {user?.displayName ? (
          <ImageUpload username={user.displayName}/>
      ):(
        <h3>To be able to post something you need to be logged in</h3>
      ) }
      <div className='app__header'>
          <img className='app__headerImage' src='https://cdn.shopify.com/s/files/1/0249/5892/6941/products/stickerirononInstagram-Logo_3840x.png?v=1615134485' alt=''/>
      </div>

      {user ? (
          <Button type='submit'onClick={() => auth.signOut()}>Logout</Button>
      ): (
          <div className='app__loginContainer'>
              <Button type='submit'onClick={() => setOpenSignIn(true)}>Login</Button>
              <Button type='submit'onClick={() => setOpen(true)}>Sign Up</Button>
          </div>
      )}
      <h1>New feed for you and your friends locally now</h1>
      {
        posts.map(({id, post}) => (
          <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageURL={post.imageURL}/>
        ))
      }
    </div>
  );
}

export default App;
