import React from 'react';
import './NewsFeed.css';

function NewsFeed({ newsTitle, newsImg }) {
  return (
    <section className="newsFeed">
      <h3>{newsTitle}</h3>
      <img src={newsImg} alt="remote-work" />
    </section>
  );
}

export default NewsFeed;
