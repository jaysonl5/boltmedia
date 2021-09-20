import React from 'react';


function Header(props){

    const linkArr = ['web', 'brand', 'production'];

    return(
        <div className="Header">
            <img src='./images/logo.jpg' alt="Bolt Media Logo" />

            <div className="projectNav">
                {linkArr.map(item => (
                    <div>
                        <button onClick={() => { props.setProjectType(item)}}>{item}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header;