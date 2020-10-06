import React from 'react';
import '../Styles/Widget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
const Widget = () => {
    return (
        <div className="widget">
            <div className="widget-input">
                <FontAwesomeIcon icon={faSearch} className='fontAwesome widget-searchIcon' />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widget-widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed
                    tweetId={'1312534542276681728'}
                />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="awfulmemebot"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
            </div>
        </div>
    )
}

export default Widget;