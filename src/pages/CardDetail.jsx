import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesById } from "../request";
import { Spinner } from "flowbite-react";
import { useTranslation } from "react-i18next";

function CardDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getArticlesById(id)
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {loading ? (
        <Spinner />
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-5">
            <h5 className="text-3xl font-bold text-center text-gray-900 mb-5">
              {article.title}
            </h5>
            <div className="flex items-center mb-5">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <img
                  src={article.author.avatar}
                  className="w-full h-full object-cover"
                  alt="Author Avatar"
                />
              </div>
              <div className="ml-3">
                <p className="text-lg dark:text-white">
                  <span className="font-semibold">{t("category")}: </span>
                  {article.category}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span>{t("studyDuration")}: {article.readTime}</span>
                  <span className="ml-2">{t("published")}: {article.createdDate}</span>
                </p>
              </div>
            </div>
            <div className="mb-6">
              <img
                className="w-full h-auto rounded-lg"
                src={article.author.avatar}
                alt="Article Image"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-400 text-lg">
              {article.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDetail;
