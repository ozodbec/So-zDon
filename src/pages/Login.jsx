import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginImg from "../img/login.svg"; 
import { login } from "../request"; 
import { Button, Label } from "flowbite-react"; 
import { setUser } from "../features/registerSlice"; 
import { UpdateIcon } from "@radix-ui/react-icons"; 
import { Link } from "react-router-dom"; 

function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await login({ username, password });
      dispatch(setUser(res));
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
          src={LoginImg}
          alt="login-img"
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
              placeholder="Enter your name"
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
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-start mb-2">
            <Link
              to={"/register"}
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              If you don't have an Account
            </Link>
          </div>

          <Button
            type="submit"
            className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 transition duration-200"
            disabled={loading}
          >
            {loading ? (
              <>
                Logging In <UpdateIcon className="animate-spin" />
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
