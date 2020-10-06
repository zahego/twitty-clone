import React from 'react';
import '../Styles/Sidebar.css';
import SidebarOption from './SidebarOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faHome, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faWolfPackBattalion } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@material-ui/core';

const Sidebar=()=>{
    return(
        <div className="sidebar">
            <FontAwesomeIcon icon={faWolfPackBattalion} size="2x" className="logo"/>
            <SidebarOption text="Home" Icon={faHome} active/>
            <SidebarOption text="Explore" Icon={faHashtag} />
            <SidebarOption text="Notification" Icon={faBell} />
            <SidebarOption text="Messages" Icon={faEnvelope} />
            <SidebarOption text="Bookmarks" Icon={faBookmark} />
            <SidebarOption text="Lists" Icon={faList} />
            <SidebarOption text="Profile" Icon={faUser} />
            <SidebarOption text="More" Icon={faEllipsisH} />
            <Button variant="outlined" className="sidebar-tweet" fullWidth>Tweet</Button>
        </div>
    )
}
export default Sidebar;

