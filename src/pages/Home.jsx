import { useEffect, useState } from "react";
import { getArticles } from "../request";
import { Cards } from "../components/Cards";
import { useDispatch } from "react-redux";
import { setArticle } from "../features/counterSlice";
import { Spinner } from "flowbite-react";

function Home() {
  const dispatch = useDispatch();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getArticles()
      .then((data) => {
        setArticles(data.data);
        dispatch(setArticle(data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 ">
      {loading ? (
        <div className="flex flex-col justify-center items-center ">
          <Spinner
            aria-label="Loading"
            size="lg"
            color="info"
            className="animate-spin text-blue-500 dark:text-blue-300"
          />
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading articles...</p>
        </div>
      ) : (
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
            Latest Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((item) => (
              <Cards key={item.id} article={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
