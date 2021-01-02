import React from 'react';
import './SendMail.css';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (formData) => {
     console.log(formData);
    };

    const dispatch = useDispatch();

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CancelIcon onClick={() => dispatch(closeSendMessage()) } className="sendMail_close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="To" type="text" name="to" ref={register({ required: true })} />
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

export default SendMail
