import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });
    };

    return (
        <div className="header">
           <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png" alt="Gmail-header logo"/>
           </div>

           <div className="header_middle">
               <SearchIcon />
               <input type="text" placeholder="Search Mail.." />

               <KeyboardArrowDownIcon className="header_inputCaret" />

           </div>

           <div className="header_right">
                <IconButton>
                    <HelpIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
           </div>
           
        </div>
    )
}

//MenuIcon inside IconButton (exported from materialIcon) makes the button have a ripple effect when clicked on it 

export default Header
