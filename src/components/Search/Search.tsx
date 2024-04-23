import "./Search.css"
import { useIconsContext } from "../../contexts/Icons"

type SearchProps = {
    placeholder: string,
    search: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Search = ({
    placeholder, 
    search, 
    onChange
}: SearchProps): React.ReactElement => {

    const { FiSearch } = useIconsContext();

    return <div
        className="search-container"
    >
        <div className="search__button">
            <FiSearch 
                size={40}
                color="white"
            />
        </div>
        <input 
            className="search-input"
            type="text"
            value={search} 
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
}

export default Search
