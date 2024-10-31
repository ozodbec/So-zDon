import { useState } from "react";
import { useDispatch } from "react-redux";
import RegisterImg from "../img/register.svg";
import { register, uploadImage } from "../request";
import { Button, Label } from "flowbite-react";
import { setUser } from "../features/registerSlice";
import { UpdateIcon } from "@radix-ui/react-icons";
import { TbHandClick } from "react-icons/tb";
import { getFormData } from "../utils";
import { Link } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = getFormData(e.target);

    try {
      const data = await uploadImage(result.avatar);
      setImg(data);

      const res = await register({ ...result, avatar: data });
      dispatch(setUser({ ...res, avatar: data }));
    } catch (error) {
      console.error("Xato yuz berdi:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center w-full max-w-md p-8 bg-white border rounded-lg shadow-md dark:bg-gray-800">
        <img
          src={RegisterImg}
          alt="register-img"
          className="w-[200px] md:w-[300px] mb-6"
        />
        <h3 className="text-2xl font-semibold mb-4">So'zDon</h3>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div>
            <Label htmlFor="username" value="Your Name" />
            <input
              name="username"
              type="text"
              id="username"
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your name..."
              required
            />
          </div>

          <div>
            <Label htmlFor="password" value="Password" />
            <input
              name="password"
              type="password"
              id="password"
              className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your password..."
              required
            />
          </div>

          <div>
            <Label htmlFor="file-upload" value="Upload image" />
            <div className="flex flex-col items-center">
              <label htmlFor="file-upload" className=" w-full  cursor-pointer">
                <div className="flex justify-center items-center !w-full h-12 bg-gray-100 border-gray-300 rounded-lg hover:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  Click me <TbHandClick />
                  <input
                    type="file"
                    name="avatar"
                    id="file-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      handleFileChange(e);
                    }}
                    required
                  />
                </div>
              </label>
              {fileName && (
                <span className="mt-2 text-sm text-gray-600">{fileName}</span>
              )}
            </div>
          </div>

          <div className="flex items-start mb-2">
            <Link
              to={"/login"}
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              If you have an account
            </Link>
          </div>

          <Button
            type="submit"
            className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 transition duration-200"
            disabled={loading}
          >
            {loading ? (
              <>
                Sign Up <UpdateIcon className="animate-spin" />
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
