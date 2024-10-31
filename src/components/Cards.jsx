import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export function Cards({ article }) {
  const { user } = useSelector((state) => state.registerSlice);
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-white border border-gray-300 shadow-md rounded-lg transition-transform duration-200 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 w-full sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto flex flex-col">
      <Link className="flex items-center gap-3 mb-4">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <img
            src={article.author.avatar || "default-avatar.png"}
            alt={`${article.author.name}'s avatar`}
            className="object-cover filter brightness-110 contrast-125 h-full w-full"
          />
        </div>
        <p className="text-[18px] font-semibold dark:text-white">
          {article.author.name || t("unknownAuthor")}
        </p>
      </Link>

      <p className="mb-3 text-[23px] font-bold dark:text-white">
        {article.title}...
      </p>

      <div className="flex justify-between items-center mt-auto">
        <p className="opacity-75 flex flex-col">
          <span className="opacity-90 font-bold dark:text-white">
            {t("publishedAt")}:
          </span>
          <span className="dark:text-white">{new Date(article.createdDate).toLocaleDateString()}</span>
        </p>
        <Link
          to={`cardDetail/${article.id}`}
          className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold rounded-full px-4 py-2 transition duration-200 hover:bg-blue-700 shadow-md hover:shadow-lg transform active:scale-95"
        >
          <span>{t("readArticle")}</span>
          <svg
            className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 8l4 4-4 4"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
