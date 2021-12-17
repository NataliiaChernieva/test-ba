import { BiSearch } from 'react-icons/bi';

export default function SearchButton({onClick}) {
    return (
        <button onClick={onClick}>
            <BiSearch />
        </button>
    )
}