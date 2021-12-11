import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const getArticles = async () => {
            const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
            const response = await request.json();

            setArticles(response);
            setLoading(false);
        }

        getArticles();
    }, []);
    return (
      <section>
        <h1 className="blog-title">Blog</h1>

        {loading ? (
          <p>Getting Article...</p>
        ) : (
          <div className="articles">
            {articles.map((article, index) => (
              <Link to={`/blog/${article.id}`}>
                <article>
                  <div className="article__image">
                    <img src={article.imageUrl} alt={`article-${index}`} />
                    <Link to="/">
                      <p className="category">{article.newsSite}</p>
                    </Link>
                    <p className="date">{new Date(article.publishedAt).toLocaleDateString()}</p>
                  </div>
                  <div className="article__text">
                    <h3 className="title">{article.title}</h3>
                    <p className="description">{article.summary}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    );
}
