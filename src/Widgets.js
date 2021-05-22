import React from 'react';
import './Widgets.css';

function Widgets() {
  return (
    <section className="widgetsContainer">
      <form>
        <input className="searchTwitter" type="text" placeholder="Search Twitter"/>
      </form>
      <h2>What’s happening</h2>
    </section>
  );
}

export default Widgets;
