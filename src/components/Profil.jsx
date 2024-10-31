import { PersonIcon } from "@radix-ui/react-icons";
import { IoExitOutline, IoPersonCircleOutline } from "react-icons/io5";
import { Avatar, Dropdown } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../features/registerSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function MyProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.registerSlice);
  
  const handleSignOut = () => {
    localStorage.removeItem("user");
    dispatch(removeUser(null));
    toast.success("Successfully signed out!"); 
  };

  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        user ? (
          <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
            <Avatar
              className="w-full h-full object-cover"
              alt="User settings"
              img={user.avatar}
              rounded
            />
          </div>
        ) : (
          <p className="bg-slate-200 px-3 py-1 text-lg font-semibold rounded-full dark:text-black">
            G
          </p>
        )
      }
    >
      <Dropdown.Header>
        <span className="block text-sm">{user ? user.username : "Ghost"}</span>
      </Dropdown.Header>
      <Dropdown.Item className="!p-0 flex justify-center"> </Dropdown.Item>
      {user && (
        <Dropdown.Item className="flex items-center gap-3">
          <Link to="/myprofile">Profil</Link>
          <IoPersonCircleOutline className="h-6 w-[20px]" />
        </Dropdown.Item>
      )}
      {user && (
        <Dropdown.Item
          className="flex items-center gap-3"
          onClick={handleSignOut} 
        >
          Sign Out <IoExitOutline className="h-6 w-[20px]" />
        </Dropdown.Item>
      )}
    </Dropdown>
  );
}

export default MyProfile;
