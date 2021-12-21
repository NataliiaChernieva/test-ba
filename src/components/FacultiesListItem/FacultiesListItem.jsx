import useCollapse from 'react-collapsed';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
    ListItem,
    ListItemBox,
    ButtonBox,
    SearchInput,
    Hightlight,
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
        // const co = description.split().find(text => text.toLowerCase().includes(inputValue));
        const index = description.indexOf(inputValue);
        console.log('index :>> ', index);
        if (index !== -1) {
            // description.substring(0, index) + <Hightlight> + description.substring(index, index + inputValue.length) + </Hightlight> + description.substring(index + inputValue.length);
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
                <FacultyDescription>{description}</FacultyDescription>
            </ExpandContainer>        
        </ListItem>
    )
    
}
