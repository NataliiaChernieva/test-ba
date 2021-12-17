import { useState } from 'react';
// import './App.css';
import FacultiesList from './components/FacultiesList/FacultiesList.jsx';
import AddButton from './components/AddButton/AddButton.jsx';

function App() {
  const [faculties, setFaculties] = useState();
 
  const handleAddButtonClick = e => {
    
  }

  return (
    <>
      <h1>Факультети університету</h1>
      <AddButton onClick={handleAddButtonClick}/>
      <FacultiesList faculties={faculties}/>
    </>  
  );
}

export default App;
