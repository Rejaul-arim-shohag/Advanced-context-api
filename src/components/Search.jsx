import { useContext, useState } from "react";
import search from "../assets/icons/search.svg"
import { CategoryContext, SearchContext } from "../context";
import useDebounce from "../hooks/useDebounce";
const Search = () => {
    const { setSearchTerm } = useContext(SearchContext);
    const { setSelectedCategory } = useContext(CategoryContext);
    const [showInput, setShowInput] = useState(false);
    const toggleInput = () => {
        setShowInput(!showInput);
    };

    const doSearch = useDebounce((term) => {
        setSelectedCategory("")
        setSearchTerm(term);
    }, 500);

    function handleChange(e) {
        const value = e.target.value;
        doSearch(value);
    }

    return (

        <form action="#" >
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                {showInput ? (
                    <input onChange={handleChange} className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                        type="search" placeholder="Search News" required />
                ) : null}
                <button type="button" onClick={toggleInput}>
                    <img src={search} />
                </button>
            </div>
        </form>

    )
}
export default Search;

