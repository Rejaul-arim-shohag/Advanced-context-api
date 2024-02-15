import { useEffect } from "react";
import { useState } from "react";

const useNewsQuery = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
  // const { searchQuery, selectedCategory } = useContext(SearchContext);

  const fetchNewsData = async (category, customQuery) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching news data...",
      });

      let apiUrl = "";

      if (customQuery) {
        apiUrl = `http://localhost:8000/v2/search?q=${customQuery}`;
      } else if (category) {
        apiUrl = `http://localhost:8000/v2/top-headlines?category=${category}`;
      } else {
        apiUrl = "http://localhost:8000/v2/top-headlines";
      }

      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorMessage = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setNewsData(data.articles);
    } catch (err) {
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
    fetchNewsData();
    // if (searchQuery) {

    //     fetchNewsData(null, searchQuery);
    // } else if (selectedCategory) {

    //     fetchNewsData(selectedCategory);
    // } else {

    //     fetchNewsData();
    // }
  }, []);

  return {
    newsData,
    error,
    loading,
  };
};

export default useNewsQuery;
