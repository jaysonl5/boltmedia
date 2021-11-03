

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
                <i className={'fab fa-github fa-2x'} style={{color: "white"}} ></i>
                <i className={'fab fa-twitter fa-2x'} style={{color: "white"}} ></i>
                <i className={'fab fa-linkedin fa-2x'} style={{color: "white"}} ></i>
                <i className={'fab fa-instagram fa-2x'} style={{color: "white"}} ></i>
            </div>
            
        </div>
    )
    

}