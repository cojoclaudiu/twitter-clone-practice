import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon  className="twitterLogo"/>

      <SidebarOption Icon={HomeIcon} text="Home" active />

      <SidebarOption Icon={SearchIcon} text="Explore" />

      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />

      <SidebarOption Icon={MailOutlineIcon} text="Messages" />

      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />

      <SidebarOption Icon={SubjectIcon} text="Lists" />

      <SidebarOption Icon={PersonOutlineIcon} text="Profile" />

      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <button className="tweetButton">Tweet</button>
    </div>
  );
}

export default Sidebar;
