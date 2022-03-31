import React from 'react';
import './topbar.css';
import NotificationsNone from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = (props) => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">CityAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>    
                    <div className="topbarIconContainer">
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div> 
                    <div className="topbarIconContainer">
                        <SettingsIcon />                       
                    </div>   
                    <img src="https://picsum.photos/id/237/200/300" alt="" className="topAvatar" />              
                </div>
            </div>
        </div>
    )
};

export default Topbar;