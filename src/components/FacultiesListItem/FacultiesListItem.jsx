import useCollapse from 'react-collapsed';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
    ListItem,
    ListItemBox,
    ButtonBox,
    SearchInput,
    // Hightlight,
    FacultyName,
    ExpandContainer,
    FacultyDirector,
    FacultyPhone,
    FacultyDescription } from "./FacultiesListItem.styled";
import SearchButton from '../SearchButton/SearchButton';
import { ExpandButton } from '../ExpandButton/ExpandButton.styled';



export default function FacultiesListItem({ name, director, description, phone }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const handleChangeInput = (e) => {
        const inputValue = e.target.value.toLowerCase();
        console.log('inputValue :>> ', inputValue);
        setValue(inputValue);
        const inputText = document.getElementById(description.id);
        let innerHTML = inputText.innerHTML;
        const index = innerHTML.indexOf(inputValue);
        if (index >= 0) {
            innerHTML = innerHTML.substring(0, index) + "<span style={background-color: #ff7c00 }>" + innerHTML.substring(index, index + inputValue.length) + "</span>" + innerHTML.substring(index + inputValue.length);
            inputText.innerHTML = innerHTML;
        }
    }

    return (
        <ListItem>
            <ListItemBox>
                <FacultyName>{name}</FacultyName>
                <ButtonBox>
                    <SearchButton onClick={() => setOpen(!open)}/>
                    <ExpandButton {...getToggleProps()}>
                       {isExpanded ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                    </ExpandButton>
                </ButtonBox>
            </ListItemBox>
            {open && <SearchInput
                        open={open} setOpen={setOpen}
                        type='text'
                        value={value}
                        onChange={handleChangeInput}
                    />}
            <ExpandContainer {...getCollapseProps()}>
                <FacultyDirector>Декан факультету: {director}</FacultyDirector>
                <FacultyPhone>Телефон факультету: { phone}</FacultyPhone>
                <FacultyDescription id={description.id}>{description.text}</FacultyDescription>
            </ExpandContainer>        
        </ListItem>
    )
    
}
