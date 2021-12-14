/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import { Divider } from 'rsuite';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import { DashBoardToggle } from './Dashboard/DashBoardToggle';
import ChatRoomLIst from './roooms/ChatRoomLIst';

const Sidebar = () => {
  const topSidebarRef = useRef();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (topSidebarRef.current) {
      setHeight(topSidebarRef.current.scrollHeight);
    }
  }, [topSidebarRef]);
  return (
    <div className="h-100 pt-2">
      <div ref={topSidebarRef}>
        <DashBoardToggle />
        <CreateRoomBtnModal />
        <Divider>Join</Divider>
      </div>
      <ChatRoomLIst aboveElementHeight={height} />
    </div>
  );
};

export default Sidebar;
