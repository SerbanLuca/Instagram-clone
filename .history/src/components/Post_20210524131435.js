import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post({username, caption, imageURL}) {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar className='post__avatar' alt='King James' src='' />
                <h3>{username}</h3>
            </div>
            <img src='https://phantom-marca.unidadeditorial.es/e575a49e04a2d928a04e1c7b9cac86e7/resize/1320/f/jpg/assets/multimedia/imagenes/2021/04/01/16172885845670.jpg' className='post__image' alt='' />
            <h4 className='post__text'><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post
