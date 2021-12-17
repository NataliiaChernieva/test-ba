import { ListItem, FacultyName, ExpandContainer, FacultyDirector, FacultyPhone, FacultyDescription, FacultyTeachers } from "./FacultiesListItem.styled";
import SearchButton from '../SearchButton/SearchButton';
import ExpandButton from '../ExpandButton/ExpandButton';

export default function FacultiesListItem({name, director, description, phone, teachers}) {
    return (
        <ListItem>
            <FacultyName>{name}</FacultyName>
            <ExpandContainer>
                <FacultyDirector>{director}</FacultyDirector>
                <FacultyPhone href="tel: ${phone}">{ phone}</FacultyPhone>
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
