import { List } from './FacultiesList.styled'
import FacultiesListItem from '../FacultiesListItem/FacultiesListItem'

export default function FacultiesList({faculties}) {
    return (
        < List >
            {faculties.map(({id, name, director, phone, description, teachers}) => (
                <FacultiesListItem
                    key={id}
                    name={name}
                    director={director}
                    phone={phone}
                    description={description}
                    teachers={teachers}
                />
            ))}
        </List >
    )
}
