import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer, Button } from "./Form.styled";
import Input from '../Input/Input';
import {postFaculty} from 'redux/faculties/facultiesOperations';
import { getFaculties } from 'redux/faculties/facultiesSelectors';

export default function Form() {
    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [number, setNumber] = useState('');
    const [description, setDescription] = useState('');
    const [teachers, setTeachers] = useState('');

    const dispatch = useDispatch();
    const faculties = useSelector(getFaculties);

    const handleSetInfo = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
        
      case 'director':
        setDirector(value);
        break;

      case 'number':
        setNumber(value);
        break;
        
      case 'description':
        setDescription(value);
        break;

      case 'teachers':
        setTeachers(value);
        break;
     
      default:
        return;
    }
    };
    
    const handleAddFaculty = e => {
    e.preventDefault();
    // const id = uuidv4();

    faculties.find(savedFaculty => savedFaculty.name === name)
      ? alert(`Факультет ${name} вже існує`)
      : dispatch(postFaculty({ name, number, id }));
      
    reset();
  };

  const reset = () => {
      setName('');
      setDirector('');
      setNumber('');
      setDescription('');
      setTeachers('');
  };
    
    return (
        <FormContainer onSubmit={handleAddFaculty}>
            <Input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Назва факультету має складатися тілько з букв, апострофу, тире и пробелів. Наприклад Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan і т. д."
              required
              onChange={handleSetInfo}
            />
            <Input
              type="text"
              name="director"
              value={director}
              onChange={handleSetInfo}
            />
            <Input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужкиб також може починатися з +"
              onChange={handleSetInfo}
            />
            <textarea
              name="description"
              value={description}
              rows="5"
              cols="40"
              placeholder='Добавте опис факультету'
              onChange={handleSetInfo}
            ></textarea>
            <Input
              type="text"
              name="teachers"
              value={teachers}
              onChange={handleSetInfo}
            />
            <Button type="submit" text="Зберегти" />
        </FormContainer>
    )
}