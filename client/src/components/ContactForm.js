import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import ContactInfo from './ContactInfo';
import SendConfirmation from './SendConfirmation';

export default function ContactForm() {

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    })

    const [submitted, setSubmitted] = useState({
        submitted: false
    })

    function changeHandler(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    const postSend = async () => {
        try{
            await axios.post('/send', {
                firstName: state.firstName, 
                lastName: state.lastName,
                email: state.email, 
                message: state.message
            })
        } catch (err){
            console.error(err);
        }

        setSubmitted(true);
        console.log('SENT!')
    }

    function submitHandler(e){
        e.preventDefault();
        postSend();
        console.log('Submitted: ' + state.firstName +  ' ' + state.lastName + ' ' + state.email + ' ' + state.phone + state.message);
    }

    return(
        <div className="Contact">
            <h2 className="Title">CONTACT US</h2>
            <div className="contactForm">
            {submitted === true ?  
            
                <SendConfirmation />
            :
            
             <form onSubmit={submitHandler} className="formContainer">
                <div className="fieldGroup">
                <label>First Name
                <input type="text" name="firstName" required="true" value={state.firstName} onChange={changeHandler}></input>
                </label>

                <label>Last Name
                <input type="text" name="lastName" required="true" value={state.lastName} onChange={changeHandler}></input>
                </label>
                </div>

                <div className="fieldGroup">
                <label>Phone
                <input type="phone" name="phone" required="true" value={state.phone} onChange={changeHandler}></input>
                </label>

                <label>Email
                <input type="email" name="email" required="true" value={state.email} onChange={changeHandler}></input>
                </label>

                </div>

                <label>Message
                <textarea name="message" required="true" value={state.message} onChange={changeHandler}></textarea>
                </label>

                <button className="sendBtn Btn" type="submit"><FontAwesomeIcon icon={faAngleDoubleRight} />Send</button>
            </form>
            }

            <ContactInfo />
            </div>
        </div>
    );
}