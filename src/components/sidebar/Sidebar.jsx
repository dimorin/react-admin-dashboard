import React, { useEffect } from 'react';
import './sidebar.css';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { PersonOutline, Storefront } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = (props) => {
    let location = useLocation();
    useEffect(() => {    
        
    },[location])
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className={`sidebarListItem ${(location.pathname === '/') && 'active'}`}>
                                <HomeWorkIcon className="sidebarIcon" />
                                Home
                            </li>
                        </Link>     
                        <Link to="/users" className="link">
                            <li className={`sidebarListItem ${(location.pathname === '/users') && 'active'}`}>
                                <PersonOutline className="sidebarIcon" />
                                Users
                            </li>
                        </Link>                          
                        <Link to="/user/2" className="link">
                            <li className={`sidebarListItem ${location.pathname.includes('/user/') && 'active'}`}>
                                <PersonOutline className="sidebarIcon" />
                                User
                            </li>
                        </Link> 
                        <Link to="/newUser" className="link">
                            <li className={`sidebarListItem ${(location.pathname === '/newUser') && 'active'}`}>
                                <PersonOutline className="sidebarIcon" />
                                New User
                            </li>
                        </Link> 
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;