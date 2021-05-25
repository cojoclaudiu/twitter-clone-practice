import React from 'react';
import './SidebarOption.css';
import { useMediaQuery } from 'react-responsive';

function SidebarOption({ active, text, Icon }) {

  const brakepointDesktop = useMediaQuery({
    query: '(min-device-width: 1281px)'
  });

  const showSidebarMenu = useMediaQuery({
    query: '(min-device-width: 999px)'
  });

  const hideSidebarMobile = useMediaQuery({
    query: '(min-device-width: 750px)'
  });

  return (
    <div className={`sidebarOption ${active ? 'sidebarOption--active' : ''}`}>
      <Icon />
      {(brakepointDesktop && <h2>{text}</h2>) || (!showSidebarMenu && hideSidebarMobile && <h2>{text}</h2> )}
    </div>
  );
}

export default SidebarOption;
