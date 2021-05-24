import React from 'react';
import './FollowUser.css';

function FollowUser({avatarURL, name, username}) {
  return (
    <div className="followUserContainer">
      <div>
        <img className="avatarImg" src={avatarURL} alt="" />
      </div>
      <div className="usernameContainer">
        <div><h3>{name}</h3></div>
        <div>@{username}</div>
      </div>
      <div className="followButtonUser">Follow</div>
    </div>
  );
}

export default FollowUser;
