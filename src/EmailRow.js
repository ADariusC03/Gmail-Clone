import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './EmailRow.css';
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({id, title, subject, description, time}) {
    // useHistory gies us the history of the page, pushing the webpage onto your browser.
    // OnClick={} inside the whole div container to push in /mail
    // using the history.push method allows you to push into another webpage on your browser.
    const history = useHistory();

    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id,
            title, 
            subject,
            description,
            time,
        }));
        history.push("/mail");
    };

    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow_options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>

            </div>
            <h3 className="emailRow_title">
                {title}
            </h3>

            <div className="emailRow_message">
                <h4>
                    {subject}{"  "}
                    <span className="emailRow_description"> - {description}</span>
                </h4>
            </div>

            <p class="emailRow_time">
                {time}
            </p>
        </div>
    )
}



export default EmailRow;
