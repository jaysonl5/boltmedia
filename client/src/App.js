
import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ContactForm from './components/ContactForm';

function App() {

  const [projectType, setProjectType] = useState('');
  return (

    <div className="App">
      
      <Header projectType={projectType} setProjectType={setProjectType} />
      
      <div className="content">
        
        <ProjectList projectType={projectType}  />
        
      </div>
      <ContactForm />
    </div>
  );
}

export default App;
