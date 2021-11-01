import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNode, faBootstrap, faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

export default function TechIcons(props){


    

    return(
    <div>
        
        {props.techs.map(item => {
            return (
            <div style={{display: "inline", margin: "0px 5px 0px 5px", padding: "5px"}}>
                {/* <FontAwesomeIcon icon={["fas", item.icon]} size="2x" style={{color: item.color}} /> */}
                <i className={'fab ' + item.icon + ' fa-2x'} style={{color: "#23376E"}} ></i>

            </div>
            )
        }
        )}
    </div>
    )
}