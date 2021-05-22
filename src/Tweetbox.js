import React from 'react';
import './Tweetbox.css';
import GifIcon from '@material-ui/icons/Gif';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import TimelineIcon from '@material-ui/icons/Timeline';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import ScheduleIcon from '@material-ui/icons/Schedule';

function Tweetbox() {
  return (
    <div className="tweetBox__container">
      <form>
        <div className="tweetBox">
          <img className="tweetBox__avatar" src="https://media-exp1.licdn.com/dms/image/C5603AQG9HvEWY4CPsQ/profile-displayphoto-shrink_800_800/0/1601299436279?e=1626912000&v=beta&t=1too7Vumh0nNxIdOdpZamZDNdCiCH7gebK1LLanAb1g" alt="avatar" />
          <input className="tweetBox_input" type="text" placeholder="What's happening?" />
        </div>

        <div className="tweetBox__footer">
          <div className="tweetBox__icons">
            <CropOriginalIcon />
            <GifIcon />
            <TimelineIcon />
            <SentimentSatisfiedIcon />
            <ScheduleIcon />
          </div>

          <button className="tweetBox__button">Tweet</button>
        </div>
      </form>
    </div>
  );
}

export default Tweetbox;
