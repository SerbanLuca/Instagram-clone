import React,{useState, useEffect} from 'react'
import './Post.css'
import {db} from '../firebase'
import Avatar from '@material-ui/core/Avatar'


function Post({postId, username, caption, imageURL}) {

    const [comments, setComments] = useState([ ])
    const [comment, setComment] = useState('')

    useEffect(() => {
        let unsubscribe;
        if(postId){
            unsubscribe = db
            .collection('posts')
            .doc(postId)
            .collection('comments')
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()))
            })
        }
        return () => {
            unsubscribe();
        }
    }, [postId])
    

    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar className='post__avatar' alt='King James' src='' />
                <h3>{username}</h3>
            </div>
            <img src={imageURL} className='post__image' alt='' />
            <h4 className='post__text'><strong>{username}</strong> {caption}</h4>

            <form>
                 <input type='text' placeholder='add a comment here' value={comment} onChange={(e) => setComments(e.target.value)} />
            </form>
        </div>
    )
}

export default Post
