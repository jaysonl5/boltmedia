export default function TechIcons(props){
    return(
    <div>        
        {props.techs.map(item => {
            return (
            <div style={{display: "inline", padding: "5px"}}>             
                <i className={item.icon + ' '} style={{color: "white"}} ></i>
            </div>
            )
        }
        )}
    </div>
    )
}