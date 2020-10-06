import React, { useState, useEffect } from 'react';
import '../Styles/Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post';
import twittyDB from '../Firebase/Firebase';
import Flipmove from 'react-flip-move';

const Feed = () => {
    const [allMyPosts, setAllMyPosts] = useState([]);
    
    useEffect(()=>{
        //get post from online db, loop through document on online db, then access data from each document
        //the data will contain displayName, userName and all parameters of <Post>
        twittyDB.collection('onlinePosts').onSnapshot(unexpectedSnapshot=>(
            setAllMyPosts(unexpectedSnapshot.docs.map(unexpectedDocument=>unexpectedDocument.data()))
        ))
    }, [])

    return (
        <div className="feed">
            <div className="feed-header">
                <h2>Home</h2>
            </div>
            <Tweetbox />
            <Flipmove>
            {allMyPosts.map((singlePost, id)=>(
                <Post 
                key={id}
                displayName={singlePost.displayName}
                userName={singlePost.userName}
                verified={singlePost.verified}
                content={singlePost.content}
                image={singlePost.image}
                avatar={singlePost.avatar}/>
            ))}
            </Flipmove>
        </div>
    )
}

export default Feed;