import "./Search.css"
import { useIconsContext } from "../../contexts/Icons"

type SearchProps = {
    placeholder: string,
    search: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSearch: () => void,
}

const Search = ({
    placeholder, 
    search, 
    onChange,
    onSearch
}: SearchProps): React.ReactElement => {

    const { FiSearch } = useIconsContext();

    return <form
        className="search-container"
        onSubmit={(e) => {
            e.preventDefault();
            onSearch()
        }}
    >
        <button
            className="btn search__button"
            type="submit"
        >
            <FiSearch 
                size={40}
                color="white"
            />
        </button>
        <input 
            className="search-input"
            type="text"
            value={search} 
            placeholder={placeholder}
            onChange={onChange}
        />
    </form>
}

export default Search
