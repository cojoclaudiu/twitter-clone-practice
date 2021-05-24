import React from 'react';
import './SidebarOption.css';
import { useMediaQuery } from 'react-responsive';

function SidebarOption({ active, text, Icon }) {
  const brakepointDesktop = useMediaQuery({
    query: '(min-device-width: 1280px)'
  });

  return (
    <div className={`sidebarOption ${active ? 'sidebarOption--active' : ''}`}>
      <Icon />
      {brakepointDesktop && <h2>{text}</h2>}
    </div>
  );
}

export default SidebarOption;
