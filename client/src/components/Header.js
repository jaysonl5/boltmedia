import React from 'react';


function Header(props){

    const linkArr = ['projects', 'design', 'production'];

    return(
        <div>
            <img src='./images/logo.jpg' alt="Bolt Media Logo" />

            <ul className="projectNav">
                {linkArr.map(item => (
                    <button onClick={props.setProjectType(item)}>{item}</button>
                    
                ))}
            </ul>
        </div>
    )
}

export default Header;