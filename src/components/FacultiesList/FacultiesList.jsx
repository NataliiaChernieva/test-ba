import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { List } from './FacultiesList.styled';
import FacultiesListItem from '../FacultiesListItem/FacultiesListItem';
import { fetchFaculties } from '../../redux/faculties/facultiesOperations';
import { getFilteredFaculties } from '../../redux/faculties/facultiesSelectors';

export default function FacultiesList() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchFaculties());
    }, [dispatch]);

    const filteredFaculties = useSelector(getFilteredFaculties);
    
    return (
        < List >
            {filteredFaculties.map(({id, name, director, phone, description}) => (
                <FacultiesListItem
                    key={id}
                    name={name}
                    director={director}
                    phone={phone}
                    description={description}
                   
                />
            ))}
        </List >
    )
}
