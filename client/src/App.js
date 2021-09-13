
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [dat, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/projects',);
      console.log(result.data)
      setProjects(result.data);
    }

    fetchData();
  }, []);

  var imageSrc = ''

  return (

    <div className="App">
      {
       dat.projects === undefined
       ? 
       <p>loading</p>
       :
       dat.projects.map(item => (
        <div className="projectList">
          <img src={`./images/${item.title}.png`} style={{width: '300px'}} />
          <h4>{item.title}</h4>          
          <p>{item.description}</p>
          <a href={item.link}>{item.link}</a>
        </div>
      ))
       
       
       }


    </div>
  );
}

export default App;
