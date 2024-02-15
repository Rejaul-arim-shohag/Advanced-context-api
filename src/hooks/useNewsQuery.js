import { useContext, useEffect } from "react";
import { useState } from "react";
import { CategoryContext, SearchContext } from "../context";
const baseUrl = 'http://localhost:8000/v2'
const useNewsQuery = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const { selectedCategory } = useContext(CategoryContext);
  const { searchTerm } = useContext(SearchContext);
  const fetchNewsData = async (apiEndPoint, type) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching news data...",
      });
      const response = await fetch(apiEndPoint);
      if (!response.ok) {
        const errorMessage = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      if (type === "search") {
        setNewsData(data?.result)
      } else if (type === "default") {
        setNewsData(data?.articles)
      }

    } catch (err) {
      setNewsData([])
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding news...",
    });

    if (selectedCategory) {
      fetchNewsData(`${baseUrl}/top-headlines?category=${selectedCategory}`, "default");
    }
    if (searchTerm) {
      fetchNewsData(`${baseUrl}/search?q=${searchTerm}`, "search");
    }
    if (!selectedCategory && !searchTerm) {
      fetchNewsData(`${baseUrl}/top-headlines`, "default");
    }

  }, [selectedCategory, searchTerm]);

  return {
    newsData,
    error,
    loading,
  };
};

export default useNewsQuery;