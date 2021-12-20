import useCollapse from 'react-collapsed';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
    ListItem,
    ListItemBox,
    ButtonBox,
    FacultyName,
    ExpandContainer,
    FacultyDirector,
    FacultyPhone,
    FacultyDescription } from "./FacultiesListItem.styled";
import SearchButton from '../SearchButton/SearchButton';
import { ExpandButton } from '../ExpandButton/ExpandButton.styled';


export default function FacultiesListItem({ name, director, description, phone, teachers }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    return (
        <ListItem>
            <ListItemBox>
                <FacultyName>{name}</FacultyName>
                <ButtonBox>
                    <SearchButton />
                    <ExpandButton {...getToggleProps()}>
                       {isExpanded ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                    </ExpandButton>
                </ButtonBox>
            </ListItemBox>
            
            <ExpandContainer {...getCollapseProps()}>
                <FacultyDirector>Декан факультету: {director}</FacultyDirector>
                <FacultyPhone>Телефон факультету: { phone}</FacultyPhone>
                <FacultyDescription>{description}</FacultyDescription>
                {/* <FacultyTeachers>
                    {teachers.map((teacher) => (
                        <li>{teacher}</li>
                    ))}
                </FacultyTeachers> */}
            </ExpandContainer>        
        </ListItem>
    )
    
}
