import React from 'react';
import './SendMail.css';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (formData) => {
     console.log(formData);
     db.collection("mail").add(
        {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        // after making and pushing the data, the message box will close
        dispatch(closeSendMessage());
    };

    const dispatch = useDispatch();

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CancelIcon onClick={() => dispatch(closeSendMessage()) } className="sendMail_close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="To" type="email" name="to" ref={register({ required: true })} />
                {errors.to && <p className="sendMail_error">To is required!</p>}

                <input placeholder="Subject" type="text" name="subject" ref={register({ required: true })} />
                {errors.subject && (<p className="sendMail_error">Subject is required!</p>)}

                <input  type="text" className="sendMail_message" name="message" ref={register({ required: true, maxLength: 800 })} />
                {errors.message && (<p className="sendMail_error">Message is required!</p>)}

                <div className="sendMail_options">
                    <Button 
                    className="sendMail_send" 
                    variant="contained"
                    color="primary"
                    type="sumbit" 
                    >Send</Button>
                </div>
            </form>
            
        </div>
    )
}

// Form Library => add npm install react-hook-form, Simple form validation
// Making of the compose and new message tab to open and close and also send into the mail.
// onSumbit={handleSumbit(onSumbit)} get the data of the form back, thats being input in the form(required fields)
// error.{name of input} renders a p tag that displays whenever the field doesn't have any text inside it.
// dispatch(closeSendMessage()) is used to exit out the messsage box 
// timestamp: firebase.firestore.FieldValue.serverTimestamp() => gives the timestamp of the db server I'm using in firebase
// db.collection("mail") : mail is the name given in the mailSlice.js
export default SendMail
