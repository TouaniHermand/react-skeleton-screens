import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Vérification des données
          setArticles(data);
        })
        .catch((err) => console.log(err));
    }, 5000); // Simule un délai de 5 secondes
  }, []);

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles ? (
        articles.map((art) => (
          <div className="article" key={art.id}>
            <h3>{art.title}</h3>
            <p>{art.body}</p>
          </div>
        ))
      ) : (
        // Skeleton affiché pendant le chargement
        <>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ marginBottom: "20px" }}>
              <Skeleton width={200} height={20} />
              <Skeleton count={1} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Articles;
