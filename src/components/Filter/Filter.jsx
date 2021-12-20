import { useDispatch} from 'react-redux';
import Input from '../Input/Input';
import { filter } from '../../redux/filter/filterSlice';

export default function Filter() {
    const dispatch = useDispatch();
     
    const changeFilter = e => {
      dispatch(filter(e.target.value.toLowerCase()));
      
    };
  
     
    return (
      <Input
        placeholder ='Знайти факультет'
        type="text"
        onChange={changeFilter}
      />
 )
 }