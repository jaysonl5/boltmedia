
import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

function App() {

  const [projectType, setProjectType] = useState('projects');
  return (

    <div className="App">
      <Header setProjectType={setProjectType} />
      <ProjectList projectType={projectType}  />

    </div>
  );
}

export default App;
