import { useContext } from "react";
import { CategoryContext, SearchContext } from "../context";
const categories = [
  { id: 1, name: "General" },
  { id: 2, name: "Business" },
  { id: 3, name: "Entertainment" },
  { id: 4, name: "Health" },
  { id: 5, name: "Science" },
  { id: 6, name: "Sports" },
  { id: 7, name: "Technology" },
  { id: 8, name: "Unknown" },

]
export default function CategoryList() {
  const { setSelectedCategory } = useContext(CategoryContext);
  const { setSearchTerm } = useContext(SearchContext);
  const handleSelectCategory = (category) => {
    setSearchTerm("")
    setSelectedCategory(category.toLowerCase())
  }
  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        {categories.map((cat) => <li key={cat.id}>
          <a href="#" onClick={() => handleSelectCategory(cat?.name)}>{cat.name}</a>
        </li>)}
      </ul>
    </div>
  );
}
