import { useState } from 'react';
// import './App.css';
import FacultiesList from './components/FacultiesList/FacultiesList.jsx';

function App() {
  const [faculties, setFaculties] = useState()
  return (
    
    <FacultiesList faculties={faculties}/>

  );
}

export default App;
