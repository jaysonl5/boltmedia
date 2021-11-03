

export default function ContactInfo(props){

    return(
        <div className="ContactInfo">
            <div className="contactGroup">
                <p>
                    <i className={'fas fa-phone'} style={{color: "white"}}></i> 918.527.0315</p>
                <p>
                    <i className={'fas fa-envelope'} style={{color: "white"}}></i> contact@boltmediaokc.com
                </p>
                
            </div>

            <div className="contactGroup">
                <a className="socialIcon" href="https://github.com/jaysonl5" target="_blank"><i className={'fab fa-github fa-2x'} ></i></a>
                <a className="socialIcon" href="https://twitter.com/boltokc" target="_blank"><i className={'fab fa-twitter fa-2x'} ></i></a>
                <a className="socialIcon" href="https://www.linkedin.com/in/jayson-lewis-90737951/" target="_blank"><i className={'fab fa-linkedin fa-2x'} ></i></a>
                <a className="socialIcon" href="https://www.instagram.com/boltmediaokc/" target="_blank"><i className={'fab fa-instagram fa-2x'} ></i></a>
            </div>
            
        </div>
    )
    

}