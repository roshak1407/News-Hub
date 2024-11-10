import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const Newsboard = ({ category, country }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.articles || []);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setError("Failed to load news articles.");
      });
  }, [category, country]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge text-bg-danger">News</span></h2>
      {error && <p className="text-center text-danger">{error}</p>}
      {articles.length === 0 && !error ? (
        <p className="text-center">No news available for the selected category and country.</p>
      ) : (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      )}
    </div>
  );
};

export default Newsboard;
