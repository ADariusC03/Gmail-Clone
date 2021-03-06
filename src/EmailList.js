import { Checkbox, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './EmailList.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import InboxIcon from '@material-ui/icons/Inbox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import Section from './Section';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {
    // creating a piece of state to keep variables in react
    // mapping it to the db in firebase with useEffecct 
    const [mail, setMail] = useState([]);

    useEffect(() => {
        db.collection("mail").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
        setMail(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
            )
        );
    }, []);

    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList_sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />

            </div>
            <div className="emailList_list">
                {mail.map(({id, data: {to, subject, message, timestamp}}) => (
                    <EmailRow 
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}

                <EmailRow  
                    title="Amazon"
                    subject="Hey New PS5 in Stock now!!"
                    description="This is a test"
                    time="8am"
                />{" "}

                <EmailRow  
                    title="Redux"
                    subject="Hey New User Come Program now!!"
                    description="This is a test test test"
                    time="3pm"
                />{" "}
            </div>
            
        </div>
    )
}

export default EmailList;

// second part of the email below header
// mainly a row of icons