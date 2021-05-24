import React from 'react';
import './FollowTopics.css';
import CloseIcon from '@material-ui/icons/Close';

function FollowTopics({ topicTitle, topicDescription }) {
  return (
    <div className="followTopics">
      <div className="followTopics__header">
        <div className="followTopics__header--title">
          <h3>{topicTitle}</h3>
        </div>
        <div className="followTopics__header--description">{topicDescription}</div>
      </div>
      <div className="followButtonTopic">Follow</div>
      <div className="removeTopic">
        <CloseIcon />
      </div>
    </div>
  );
}

export default FollowTopics;
