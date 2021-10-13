import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            <div className="projectCards">
            <img src={`./images/${item.img}`} alt={`Placeholder for ${item.title} project`} />
            <h4>{item.title}</h4>          
            <p>{item.description}</p>
            <button className="visitBtn" onClick={() => window.open(item.link, "_blank")}>View</button>
            </div>
          </div>
        ))
         
         
         }
  
  
      </div>
    );
  }
  
  export default ProjectList;