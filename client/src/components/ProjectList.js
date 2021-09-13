import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectList(props) {
    const [data, setData] = useState([]);
    console.log(props.projectType);
    useEffect(() => {
      const fetchUrl = 'http://localhost:5000/' + props.projectType;
      const fetchData = async () => {
        const result = await axios(fetchUrl,);
        console.log(result.data)
        setData(result.data);
      }
  
      fetchData();
    }, [props.projectType]);
  
    return (
  
      <div className="ProjectList">
        {
         data.projects === undefined
         ? 
         <p>loading</p>
         :
         data.projects.map(item => (
          <div className="projectList">
            <img src={`./images/${item.title}.png`} alt={`Placeholder for ${item.title} project`} />
            <h4>{item.title}</h4>          
            <p>{item.description}</p>
            <a href={item.link}>{item.link}</a>
          </div>
        ))
         
         
         }
  
  
      </div>
    );
  }
  
  export default ProjectList;