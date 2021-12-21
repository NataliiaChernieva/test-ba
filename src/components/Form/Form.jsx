import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import { Overlay, CloseBtn, FormContainer, Button, TextArea } from "./Form.styled";
import Input from '../Input/Input';
import {postFaculty} from '../../redux/faculties/facultiesOperations';
import { getFaculties } from '../../redux/faculties/facultiesSelectors';

const modalRoot = document.getElementById('modal-root');

export default function Form({show, setShow}) {
    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    
    const dispatch = useDispatch();
    const faculties = useSelector(getFaculties);

    const handleSetInfo = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'Назва факультету':
        setName(value);
        break;
        
      case 'Декан факультету':
        setDirector(value);
        break;

      case 'Номер телефону':
        setPhone(value);
        break;
        
      case 'description':
        setDescription(value);
        break;

      default:
        return;
    }
    };
    
    const handleAddFaculty = e => {
    e.preventDefault();
    faculties.find(savedFaculty => savedFaculty.name === name)
      ? alert(`Факультет ${name} вже існує`)
      : dispatch(postFaculty({ name, director, phone, description}));
      
      reset();
      setShow(!show);
  };

  const reset = () => {
      setName('');
      setDirector('');
      setPhone('');
      setDescription('');
  };

  const closeModal = () => {
      setShow(!show);
    }
    
  return (
    createPortal(
      <Overlay>
        <CloseBtn type='button'onClick={closeModal}><MdClose size='2em'/></CloseBtn>
        <FormContainer show={show} onSubmit={handleAddFaculty}>
            <Input
              type="text"
              name="Назва факультету"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Назва факультету має складатися тілько з букв, апострофу, тире и пробелів. Наприклад Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan і т. д."
              required
              onChange={handleSetInfo}
            />
            <Input
              type="text"
              name="Декан факультету"
              value={director}
              onChange={handleSetInfo}
            />
            <Input
              type="tel"
              name="Номер телефону"
              value={phone}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужкиб також може починатися з +"
              onChange={handleSetInfo}
            />
            <TextArea
              name="description"
              value={description}
              rows="5"
              placeholder='Добавте опис факультету'
              onChange={handleSetInfo}
            ></TextArea>
            <Button type="submit" onClick={handleAddFaculty}>Зберегти</Button>
        </FormContainer>
      </Overlay>, modalRoot
    )
  )
}