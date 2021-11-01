import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import TechIcons from './TechIcons';

function ProjectList(props) {
    const [data, setData] = useState([]);
    console.log(props.projectType);
    useEffect(() => {
      const fetchUrl = 'http://localhost:5000/projects/' + props.projectType;
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
            <img src={`./images/${item.img}`} alt={`Placeholder for ${item.title} project`} /> 
            <div className="projectCards">                                                   
              <h4>{item.title}</h4>
              <div className="icons">
                <TechIcons techs={item.tech} /> 
              </div>
              <p>{item.description} <a href="" onClick={() => window.open(item.link, "_blank")}>Take a closer look <span className="" 
              role="img">&#128064;</span> </a></p>
              {/* <button className="visitBtn" onClick={() => window.open(item.link, "_blank")}><FontAwesomeIcon icon={faExternalLinkAlt} /> View</button> */}
            </div>
          </div>
        ))
         
         
         }
  
  
      </div>
    );
  }
  
  export default ProjectList;