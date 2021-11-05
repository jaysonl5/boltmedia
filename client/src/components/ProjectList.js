import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import TechIcons from './TechIcons';

function ProjectList(props) {
    const [data, setData] = useState([]);
    console.log(props.projectType);
    useEffect(() => {
      const fetchUrl = '/projects/' + props.projectType;
      const fetchData = async () => {
        const result = await axios(fetchUrl,);
        console.log(result.data)
        setData(result.data);
      }
  
      fetchData();
    }, [props.projectType]);

    return (
  
      <div className="projectContainer">
        {
         data.projects === undefined
         ? 
         <p>loading</p>
         :
         data.projects.map(item => (
          <div className="projectList projectList-animate">
            <div className="techIcons">
                <TechIcons techs={item.tech} /> 
              </div>
            <img src={`./images/${item.img}`} alt={`Placeholder for ${item.title} project`} /> 
            <div className="projectCards">                                                   
              <h4>{item.title}</h4>
              <p>{item.description} </p>
               {/* <a href="" onClick={() => window.open(item.link, "_blank")}>Take a closer look <span className="" 
              role="img">&#128064;</span> </a> */}
              
            </div>
            <button className="visitBtn Btn" onClick={() => window.open(item.link, "_blank")}><FontAwesomeIcon icon={faChevronRight} /> View</button>
          </div>
        ))
         
         
         }
  
  
      </div>
    );
  }
  
  export default ProjectList;