
import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ContactForm from './components/ContactForm';

function App() {

  const [projectType, setProjectType] = useState('');
  return (

    <div className="App">
      <Header setProjectType={setProjectType} />
      <ContactForm />
      <ProjectList projectType={projectType}  />

    </div>
  );
}

export default App;
