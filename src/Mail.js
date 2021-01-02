import React from 'react';
import { useHistory } from 'react-router-dom';
import './Mail.css';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorIcon from '@material-ui/icons/Error';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PrintIcon from '@material-ui/icons/Print';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function Mail() {
    const history = useHistory();

    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_toolsLeft">
                <IconButton onClick={() => history.push("/")}>
                    <ArrowBackIcon/>    
                </IconButton>
                <IconButton>
                    <MoveToInboxIcon/>
                </IconButton>
                <IconButton>
                    <ErrorIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <EmailIcon/>
                </IconButton>
                <IconButton>
                   <WatchLaterIcon/> 
                </IconButton>
                <IconButton>
                    <CheckCircleIcon/>
                </IconButton>
                <IconButton>
                   <LabelImportantIcon/> 
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>

                </div>

                <div className="mail_toolsRight">
                <IconButton>
                    <UnfoldMoreIcon />    
                </IconButton>
                <IconButton>
                    <PrintIcon />
                </IconButton>
                <IconButton>
                    <ExitToAppIcon />
                </IconButton>
                </div>
            </div>
            <div className="mail_body">
                <div className="mail_bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className="mail_important" />
                    <p>{selectedMail?.title}</p>
                    <p className="mail_time">{selectedMail?.time}</p>
                </div>

                <div className="mail_message"><p>{selectedMail?.description}</p></div>
            </div>
        </div>
    );
}

export default Mail;

// the mail screen.
// it has tools in the left and right sections of the top 
// mail_bodyHeader is the mail letterhead to display the title, sender and timestamp