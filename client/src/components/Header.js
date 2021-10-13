import React from 'react';


function Header(props){

    const linkArr = ['web', 'brand', 'production'];

    return(
        <div className="Header">
            <div className="brand">
                <img src='./images/logo.png' alt="Bolt Media Logo" />
            </div>
            <div className="titleBox">
                <h1 className="Title">WORK</h1>
                <div className="secondBox"></div>
            </div>
            <div className="projectNav">
                {linkArr.map(item => (
                    <div>
                        {
                            item == props.projectType ?
                            <button className="navBtn navBtn-Active"  onClick={() => { props.setProjectType(item)}}>{item}</button>
                            :
                            <button className="navBtn" onClick={() => { props.setProjectType(item)}}>{item}</button>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header;