import React, { useState } from 'react';

export default function ContactForm() {

    const [values, setValues] = useState({
        firstName: String,
        lastName: String,
        email: String,
        message: String
    })

    const changeHandler = (e) =>{
        setValues()
    }

    const submitHandler = (e) => {
        e.preventDefault();

        console.log('Submitted: ' + e.target.value);
    }

    return(
        <div className="contactForm">
            <form onSubmit={submitHandler}>
                <label>First Name:
                <input type="text" name="firstName" required="true"></input>
                </label>

                <label>Last Name:
                <input type="text" name="lastName" required="true"></input>
                </label>

                <label>Email:
                <input type="text" name="email" required="true"></input>
                </label>

                <label>Brief project description:
                <textarea name="message" required="true"></textarea>
                </label>

                <button type="submit">Send</button>
            </form>

        </div>
    );
}