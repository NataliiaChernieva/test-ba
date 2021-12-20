import { useSelector } from 'react-redux';
import FacultiesList from './components/FacultiesList/FacultiesList.jsx';
import AddButton from './components/AddButton/AddButton.jsx';
import * as API from './services/api';
import { getFaculties } from './redux/faculties/facultiesSelectors.js';

function App() {
  const faculties = useSelector(getFaculties())
   
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
