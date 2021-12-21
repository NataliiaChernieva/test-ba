import { AddBtn } from './AddButton.styled';
import { AiOutlinePlus } from 'react-icons/ai';

export default function AddButton({onClick}) {
    return (
        <AddBtn onClick={onClick}>
            <AiOutlinePlus/>
        </AddBtn>
    )
}