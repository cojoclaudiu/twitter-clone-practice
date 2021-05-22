import React from 'react';
import './Post.css';
import PostImage from './PostImage';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import LoopIcon from '@material-ui/icons/Loop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

function Post({ avatarURL, displayName, username, timestamp, bodyText, imageURL }) {
  return (
    <>
      <section className="postContainer">
        <img className="postContainer__avatar" src={avatarURL} alt="avatar" />

        <section className="postContainer__content">
          <header className="postContainer__header">
            <div className="postContainer__name">{displayName}</div>
            <div className="badge">
              <CheckCircleIcon />
            </div>
            <div className="postContainer__username">@{username}</div>
            <div className="postContainer__time">{timestamp}h</div>
            <div className="moreIcon">
              <MoreHorizIcon />
            </div>
          </header>
          <main className="postContainer__body">{bodyText}</main>

          {imageURL && <PostImage imageURL={imageURL} />}

          <footer className="postContainer__footer">
            <div className="replayIcon">
              <ChatBubbleOutlineIcon />
            </div>

            <div className="retweetIcon">
              <LoopIcon />
            </div>

            <div className="likeIcon">
              <FavoriteBorderIcon />
            </div>

            <div className="shareIcon">
              <ShareIcon />
            </div>
          </footer>
        </section>
      </section>
    </>
  );
}

export default Post;
