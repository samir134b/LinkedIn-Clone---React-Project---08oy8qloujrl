import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/Header.css";
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Header() {
  const user=useSelector(selectUser)
     
  return (
    <div className="header">
        <div className="header__left">
           <div className="header__logo">
               <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="sam"/>
           </div>
           <div className="header__search">
            <SearchIcon/>
            <input type="text" placeholder="Search"/>
           </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={PeopleIcon} title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={MessageIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption avatar={Avatar} title={user.displayName}/>
            </div>   
    </div>
    

    
  )
}

export default Header
