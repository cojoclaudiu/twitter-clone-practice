import React from 'react';
import './Widgets.css';
import NewsFeed from './NewsFeed';
import FollowTopics from './FollowTopics';

function Widgets() {
  return (
    <section className="widgetsContainer">
      <form>
        <input className="searchTwitter" type="text" placeholder="Search Twitter" />
      </form>

      <div className="widgetNews">
        <div className="widgetNews__news">
          <h2>What’s happening</h2>
        </div>

        <NewsFeed newsTitle="Lady Gaga opens up about a traumatic experience at 19" newsImg="https://pbs.twimg.com/media/E17n5RJXsAEDsl4?format=png&name=900x900" />

        <NewsFeed newsTitle="Here's why bitcoin is a danger to the environment" newsImg="https://pbs.twimg.com/media/EpXuqsNW4AELiQ3?format=jpg&name=medium" />

        <NewsFeed newsTitle="Nadiya Hussain: 'I found my confidence again, by wearing colourful clothes'" newsImg="https://pbs.twimg.com/media/E17gz7nWUAAY8gm?format=jpg&name=medium" />
      </div>

      <div className="widgetNews">
        <div className="widgetNews__news">
          <h2>Who to follow</h2>
        </div>
      </div>

      <div className="widgetNews">
        <div className="widgetNews__news">
          <h2>Topics to follow</h2>
        </div>

        <FollowTopics topicTitle="Open Source" topicDescription="Technology" />
        <FollowTopics topicTitle="Web development" topicDescription="Technology" />
        <FollowTopics topicTitle="Linux" topicDescription="Operating system" />
        <FollowTopics topicTitle="Databases" topicDescription="Operating system" />
        <FollowTopics topicTitle="Cloud computing" topicDescription="Operating system" />
      </div>
    </section>
  );
}

export default Widgets;
