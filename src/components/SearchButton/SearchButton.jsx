import { BiSearch } from 'react-icons/bi';
import { SearchBtn } from './Searchbotton.styled';

export default function SearchButton({ onClick }) {
    
    return (
        <SearchBtn onClick={onClick}>
            <BiSearch />
        </SearchBtn>
    )
}