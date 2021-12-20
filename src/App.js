import { useState } from 'react';
import { Container, Title, TopBox } from './components/Container/Container.styled.jsx'
import FacultiesList from './components/FacultiesList/FacultiesList.jsx';
import Filter from './components/Filter/Filter.jsx';
import AddButton from './components/AddButton/AddButton.jsx';

function App() {
  const [show, setShow] = useState(false)
  // const handleAddButtonClick = e => {
    
  // }

  return (
    <Container>
      <Title>Факультети університету</Title>
      <TopBox>
        <Filter/>
        <AddButton onClick={()=> setShow(!show)}/>
      </TopBox>
      <FacultiesList/>
      
    </Container>  
  );
}

export default App;
