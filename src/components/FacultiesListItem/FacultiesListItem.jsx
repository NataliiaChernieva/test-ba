import useCollapse from 'react-collapsed';
import { useState } from 'react';
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
import Input from '../Input/Input';


export default function FacultiesListItem({ name, director, description, phone }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const handleChangeInput = (e) => {
        
    }

    return (
        <ListItem>
            <ListItemBox>
                <FacultyName>{name}</FacultyName>
                <ButtonBox>
                    <SearchButton onClick={() => setOpen(!open)}>
                        {open && <Input
                            type='text'
                            value={value}
                            onChange={handleChangeInput}
                        />}
                    </SearchButton>
                    <ExpandButton {...getToggleProps()}>
                       {isExpanded ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                    </ExpandButton>
                </ButtonBox>
            </ListItemBox>
            
            <ExpandContainer {...getCollapseProps()}>
                <FacultyDirector>Декан факультету: {director}</FacultyDirector>
                <FacultyPhone>Телефон факультету: { phone}</FacultyPhone>
                <FacultyDescription>{description}</FacultyDescription>
                </ExpandContainer>        
        </ListItem>
    )
    
}
