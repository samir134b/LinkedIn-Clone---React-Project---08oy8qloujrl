import React from 'react'
import "./css/Sidebar.css"
import  { Avatar} from "@mui/material";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
  const user=useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
             <img src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sam"/>
      
               <div className="profile__details">
                <Avatar src={user.photoURL}/>
                 <h4>{user.displayName}</h4>
                     <p>Web Developer</p>
              </div>
              <div className="profile__stats">
                <span>Who Viewed Your Profile</span>
                <span className="stat__number">20</span>
              </div>
              <div className="profile__stats">
                <span>Connections<br/><b>Grow Your Network</b></span>
                <span className="stat__number">150</span>
              </div>
      </div>
             <div className="sidebar__recent">
              <p>Recent</p>
              <p className="hash"><span>#</span>branding</p>
              <p className="hash"><span>#</span>marketing</p>
              <p className="hash"><span>#</span>web development</p>
              <p className="hash"><span>#</span>programming</p>
              <p className="hash"><span>#</span>reactjs</p>
              <p className="hash"><span>#</span>reduxtoolkit</p>
             </div>
    </div>
  )
}

export default Sidebar
