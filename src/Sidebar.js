import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarOption from './SidebarOption';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontsize="large" />} className="sidebar_compose" >Compose</Button>
            
            <SidebarOption Icon={InboxIcon} title="Inbox" number={15}  selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={15} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={15} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={15} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={15} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={15} />
            <SidebarOption Icon={ExpandMoreIcon} title="Categories" number={15} />

            <div class="sidebar_footer">
                <div class="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

//Sidebar is the side of the page in Gmail
export default Sidebar
