import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function BlogDetail() {
    const params = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);

    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const getArticle = async () => {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

            if(!request.ok) {
                setLoading(false);
                return setNotFound(true);
            }

            const response = await request.json();

            document.title = `${response.title} | Ariz Blog`;
            setArticle(response);
            setLoading(false);
        }

        getArticle();
    }, [params]);

    if (notFound) {
        return <h1>Artikel tidak ditemukan</h1>
    }

    return (
        <section>
           {loading && <p>Getting data...</p>}
           <h1>{article.title}</h1>
           <img src={article.imageUrl} />
            <p>{article.summary}</p>
        </section>
    )
}
