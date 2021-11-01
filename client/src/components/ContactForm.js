import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import ContactInfo from './ContactInfo';

export default function ContactForm() {

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
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
            await axios.post('http://localhost:5000/send', {
                firstName: state.firstName, 
                lastName: state.lastName,
                email: state.email, 
                message: state.message
            })
        } catch (err){
            console.error(err);
        }

        console.log('SENT!')
    }

    function submitHandler(e){
        e.preventDefault();
        postSend();
        console.log('Submitted: ' + state.firstName +  ' ' + state.lastName + ' ' + state.email + ' ' + state.message);
    }

    return(
        <div className="contactForm">
            <h1 className="Title">CONTACT US</h1>
            <div className="secondBox"></div>
            <form onSubmit={submitHandler}>
                <label>First Name
                <input type="text" name="firstName" required="true" value={state.firstName} onChange={changeHandler}></input>
                </label>

                <label>Last Name
                <input type="text" name="lastName" required="true" value={state.lastName} onChange={changeHandler}></input>
                </label>

                <label>Email
                <input type="email" name="email" required="true" value={state.email} onChange={changeHandler}></input>
                </label>

                <label>Message
                <textarea name="message" required="true" value={state.message} onChange={changeHandler}></textarea>
                </label>

                <button className="sendBtn" type="submit"><FontAwesomeIcon icon={faAngleDoubleRight} />Send</button>
            </form>

            <ContactInfo />

        </div>
    );
}