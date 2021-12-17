import { ListItem, FacultyName, ExpandContainer, FacultyDirector, FacultyDescription, FacultyTeachers } from "./FacultiesListItem.styled";
import SearchButton from '../SearchButton/SearchButton';
import ExpandButton from '../ExpandButton/ExpandButton';

export default function FacultiesListItem({name, director, description, teachers}) {
    return (
        <ListItem>
            <FacultyName>{name}</FacultyName>
            <ExpandContainer>
                <FacultyDirector>{director}</FacultyDirector>
                <FacultyDescription>{description}</FacultyDescription>
                <FacultyTeachers>
                    {teachers.map((teacher) => (
                        <li>{teacher}</li>
                    ))}
                </FacultyTeachers>
            </ExpandContainer>
            <SearchButton />
            <ExpandButton/>
        </ListItem>
    )
    
}
