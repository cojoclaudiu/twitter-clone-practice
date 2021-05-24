import React from 'react';
import Tweetbox from './Tweetbox';
import Post from './Post';
import './Feed.css';

function Feed() {
  return (
    <section className="feedContainer">
      {/* header */}
      <header className="headerFeed">
        <h2>Home</h2>
      </header>

      <Tweetbox />

      {/* post */}
      <Post avatarURL={`https://media-exp1.licdn.com/dms/image/C5603AQG9HvEWY4CPsQ/profile-displayphoto-shrink_800_800/0/1601299436279?e=1626912000&v=beta&t=1too7Vumh0nNxIdOdpZamZDNdCiCH7gebK1LLanAb1g`} displayName={`Claudiu Cojocaru`} username={`claudiucjc`} timestamp={`9`} bodyText={`Our group working on Payments UI at Stripe is going to be growing significantly this year, and I'm looking for two staff engineers to help us imagine and build the future of payments on the web.`} imageURL="https://media1.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47w9zb48s6sh3emco1za6erh5k1e4tom2nsv3nue0l&rid=giphy.gif&ct=g"/>

      <Post
        avatarURL={`https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg`}
        displayName={`Dan`}
        username={`dan_abramov`}
        timestamp={`20`}
        bodyText={`Tag a developer with <1K followers who’s bringing you joy on this website, with a short blurb of what you appreciate about them. 
        (No requirement that they tweet about programming all the time.) If you get tagged, consider tagging someone else too! `}
      />
      <Post avatarURL={`https://pbs.twimg.com/profile_images/1274526737523564544/9sF1k37k_400x400.jpg`} displayName={`Joe Previte`} username={`jsjoeio`} timestamp={`1`} bodyText={`Job Alert: A company based here in Phoenix, AZ is hiring a Senior Front-End Developer who knows React & React Native`} />

      <Post avatarURL={`https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg`} displayName={`Rich Harris`} username={`Rich_Harris`} timestamp={`2`} bodyText={`Open sourceror. I make graphics at the @nytimes`} />

      <Post avatarURL={`https://pbs.twimg.com/profile_images/1287132544333357057/5D1E3q7o_400x400.jpg`} displayName={`Svelte Society`} username={`SvelteSociety`} timestamp={`20`} bodyText={`The Global @sveltejs Community!`} />
      <Post avatarURL={`https://pbs.twimg.com/profile_images/1234528105819189248/b6F1hk_6_400x400.jpg`} displayName={`MongoDB`} username={`MongoDB`} timestamp={`1`} bodyText={`For the ones who dream big & think ahead to create the things we can’t live without.`} />

      <Post avatarURL={`https://pbs.twimg.com/profile_images/1299792556205600768/13p7KQys_400x400.jpg`} displayName={`Trish`} username={`trishtrashers`} timestamp={`4`} bodyText={`Dog mom,Actor,Unicef celebrity advocate`} />

      <Post avatarURL={`https://pbs.twimg.com/profile_images/1282020927/magatar_400x400.jpg`} displayName={`Stephen Diehl`} username={`smdiehl`} timestamp={`20`} bodyText={`Finally got around to updating my large Haskell guide for Modern Haskell. Hope it is useful for a few more years.`} />
      <Post avatarURL={`https://pbs.twimg.com/profile_images/484838569916108801/oCgm29k9_400x400.png`} displayName={`Haskell`} username={`HaskellOrg`} timestamp={`1`} bodyText={`Committed to a welcoming, vibrant & ﬂourishing #Haskell community! Managed by @nikivazou & @jaspervdj on behalf of the http://Haskell.org Committee`} />

      <Post
        avatarURL={`https://pbs.twimg.com/profile_images/1386416612090294273/7lK7KcQ-_400x400.jpg`}
        displayName={`Sara Soueidan`}
        username={`SaraSoueidan`}
        timestamp={`9`}
        bodyText={`Independent UI & design systems engineer/speaker/trainer • tweets mainly about front-end design/dev • camp @superfriendlyco
 • Soon http://practical-accessibility.today`}
      />

      <Post
        avatarURL={`https://pbs.twimg.com/profile_images/584963092120899586/TxkxQ7Y5_400x400.png`}
        displayName={`Lea Verou`}
        username={`LeaVerou`}
        timestamp={`23`}
        bodyText={`Wednesday's #UX hall of shame: On @GitHub
, saving an invalid repo description closes the editing popup, SILENTLY DISCARDS your edits, and displays this error message. `}
      />
      <Post
        avatarURL={`https://pbs.twimg.com/profile_images/1265218936003596289/Q1Gzeheb_400x400.jpg`}
        displayName={`Ire Aderinokun`}
        username={`ireaderinokun`}
        timestamp={`1`}
        bodyText={`Frontend Dev, UI Design, @buycoins_africa
 (YC S18), @botsofcode
, @googledevexpert
, @frontstackio
, @feminist_co`}
      />

      <Post avatarURL={`https://pbs.twimg.com/profile_images/1292888896938729473/tDmJ1K6m_400x400.jpg`} displayName={`Cassidy`} username={`cassidoo`} timestamp={`9`} bodyText={`Principal Developer Experience Engineer @netlify
! Married to @ijoosong
. I like jokes, karaoke, and mechanical keyboards! `} />

      <Post
        avatarURL={`https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg`}
        displayName={`Dan`}
        username={`dan_abramov`}
        timestamp={`20`}
        bodyText={`Tag a developer with <1K followers who’s bringing you joy on this website, with a short blurb of what you appreciate about them. 
  (No requirement that they tweet about programming all the time.) If you get tagged, consider tagging someone else too! `}
      />
      <Post avatarURL={`https://pbs.twimg.com/profile_images/1274526737523564544/9sF1k37k_400x400.jpg`} displayName={`Joe Previte`} username={`jsjoeio`} timestamp={`1`} bodyText={`Job Alert: A company based here in Phoenix, AZ is hiring a Senior Front-End Developer who knows React & React Native`} />
    </section>
  );
}

export default Feed;
