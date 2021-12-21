import { BiSearch } from 'react-icons/bi';
import { SearchBtn } from './Searchbotton.styled';

export default function SearchButton({children, onClick }) {
    
    return (
        <SearchBtn onClick={onClick}>
            <BiSearch />
            {children}
        </SearchBtn>
    )
}