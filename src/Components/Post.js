import { Avatar } from '@material-ui/core';
import React, {forwardRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessQueen, faRetweet, faUpload } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import '../Styles/Post.css';
import ModalImage from './Modal';


const Post = forwardRef(({ displayName, userName, verified, content, image, avatar }, ref) => {
    //key name from firebase must match props names
    return (
        <div className="post" ref={ref}>
            <Avatar src={avatar} className='avatar post-avatar' />
            <div className="post-header">
                <h5>{displayName} </h5>
                {verified === true ?
                    (<span><FontAwesomeIcon icon={faChessQueen} className='fontAwesome' /></span>) : null
                }
                <p>@{userName}</p>
            </div>
            <div className='post-content'>
                <p>{content}</p>
            </div>
            {image!==""?<ModalImage image={image} />:null}
            
            <FontAwesomeIcon icon={faComment} className='fontAwesome f1' />
            <FontAwesomeIcon icon={faRetweet} className='fontAwesome f2' />
            <FontAwesomeIcon icon={faHeart} className='fontAwesome f3' />
            <FontAwesomeIcon icon={faUpload} className='fontAwesome f4' />
            {/*<FontAwesomeIcon icon={['far', 'chat']} />*/}
        </div>
    )
});
export default Post;