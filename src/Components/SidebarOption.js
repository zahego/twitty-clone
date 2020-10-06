import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/Sidebar.css';

const SidebarOption =({active, text, Icon})=>{
    return(
        
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            {/*active helps keep the current page show that it is active */}
             <FontAwesomeIcon icon={Icon} className="fontAwesome" />
            <h2>{text}</h2>
           
        </div>
    )
}

export default SidebarOption;