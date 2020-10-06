import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import '../Styles/Feed.css';
import '../Styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia, faImage, faPollH, faSmile, faCalendar } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Tweetbox.css';
import twittyDB from '../Firebase/Firebase';

const Tweetbox = () => {
    const [tweetMsg, setTweetMsg] = useState("");
    const [tweetImg, setTweetImg] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        if (tweetMsg === "" && tweetImg === "") {
            alert("please input a message or an image URL");
        }
        else {
            twittyDB.collection('onlinePosts').add({
                displayName: "Jokah",
                userName: "thejoker777",
                verified: true,
                content: tweetMsg,
                image: tweetImg,
                avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/joaquin-phoenix-joker-1578328786.jpg?crop=0.563xw:1.00xh;0.0340xw,0&resize=480:*"
            });
            setTweetMsg("");
            setTweetImg("");
        }
    }

    return (
        <div className="tweetBox">
            <form className="tweetBox-grid">
                <Avatar
                    className='avatar'
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/joaquin-phoenix-joker-1578328786.jpg?crop=0.563xw:1.00xh;0.0340xw,0&resize=480:*" />
                <input
                    onChange={e => setTweetMsg(e.target.value)}
                    value={tweetMsg}
                    placeholder="What's happening?"
                    type="text" className="t1" />
                <input
                    onChange={e => setTweetImg(e.target.value)}
                    value={tweetImg}
                    placeholder="Add img URL"
                    type="text" className="t2" />
                <Button className="global-setting" >
                    <FontAwesomeIcon icon={faGlobeAsia} className="fontAwesome" />
                    <span>Everyone can reply</span>
                </Button>
                <div className="separate-line"></div>
                <FontAwesomeIcon icon={faImage} className="fontAwesome f1" />
                <FontAwesomeIcon icon={faPollH} className="fontAwesome f2" />
                <FontAwesomeIcon icon={faSmile} className="fontAwesome f3" />
                <FontAwesomeIcon icon={faCalendar} className="fontAwesome f4" />
                <Button type="submit" onClick={sendTweet} variant="outlined" className="tweet-button">Tweet</Button>
            </form>
        </div>
    )
}
export default Tweetbox;