import {
  Label,
  FileInput,
  TextInput,
  Select,
  Textarea,
  Button,
} from "flowbite-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { addArticle } from "../request";
import toast, { Toaster } from "react-hot-toast"; // Toast import

function CreateArticle() {
  const { user } = useSelector((state) => state.registerSlice);

  const { t } = useTranslation();
  const [category, setCategory] = useState("IT");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [articleImg, setArticleImg] = useState("");
  const [readTime, setReadTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newArticle = {
      title,
      description,
      createdDate,
      author: {
        name: user.username,
        avatar: user.avatar,
      },
      category,
      articleImg,
      readTime,
    };

    try {
      await addArticle(newArticle);
      toast.success("Ma'lumot muvaffaqiyatli qo'shildi!");
      console.log("Yangi maqola:", newArticle);
    } catch (error) {
      toast.error("Xatolik yuz berdi, qayta urinib ko'ring.");
      console.error("Xatolik:", error);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          {t("Create New Article")}
        </h2>

        {/* Article Title */}
        <div>
          <Label
            htmlFor="title"
            value={t("articleTitle")}
            className="mb-2 text-gray-700 dark:text-gray-300"
          />
          <TextInput
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            id="title"
            placeholder={t("placeHolderArticleTitle")}
            type="text"
            sizing="sm"
            className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Category and Date */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <Label
              htmlFor="category"
              value={t("selectCategory")}
              className="mb-2 text-gray-700 dark:text-gray-300"
            />
            <Select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              name="category"
              id="category"
              className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="ovqat">Ovqat</option>
              <option value="sevgi">Sevgi</option>
              <option value="ilmiy">Ilmiy</option>
              <option value="hajviy">Hajviy</option>
              <option value="IT">IT</option>
              <option value="layfhak">Layfhak</option>
            </Select>
          </div>
          <div className="w-1/2">
            <Label
              htmlFor="date"
              value={t("publishedAt")}
              className="mb-2 text-gray-700 dark:text-gray-300"
            />
            <TextInput
              onChange={(e) => setCreatedDate(e.target.value)}
              id="date"
              placeholder="30.10.2024"
              name="createdDate"
              type="text"
              sizing="sm"
              className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div className="w-full">
          <Label
            htmlFor="img"
            className="mb-2 text-gray-700 dark:text-gray-300"
          >
            {t("uploadYourImg")}
          </Label>
          <FileInput
            id="img"
            name="articleImg"
            onChange={(e) => setArticleImg(e.target.value)}
            className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Study Duration */}
        <div>
          <Label
            htmlFor="soniya"
            value={t("studyDuration")}
            className="mb-2 text-gray-700 dark:text-gray-300"
          />
          <TextInput
            onChange={(e) => setReadTime(e.target.value)}
            id="soniya"
            name="readTime"
            placeholder={t("placeHolderPublished")}
            type="text"
            sizing="sm"
            className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Description */}
        <div>
          <Label
            htmlFor="description"
            value={t("article")}
            className="mb-2 text-gray-700 dark:text-gray-300"
          />
          <Textarea
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            placeholder={t("placeHolderThisArticle")}
            name="description"
            required
            rows={4}
            className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <Button type="submit" color="info" className="w-full">
          {t("submit")}
        </Button>
      </form>
    </>
  );
}

export default CreateArticle;
