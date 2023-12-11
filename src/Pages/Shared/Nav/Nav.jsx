import { FiHeart } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { RiUserAddLine } from "react-icons/ri";
const Nav = () => {
  return (
    <div className="flex justify-evenly items-center py-4 border-b-2 ">
      <div>
        <input
          type="search"
          name=""
          className="text-base p-2 rounded-xl bg-base-200 focus:outline-none"
          placeholder="Enter your search shoes"
        />
      </div>
      <div className="flex items-center gap-4 text-slate-500 font-bold">
        <FiHeart className="cursor-pointer text-2xl text-slate-500" />
        <SlBasket className="cursor-pointer text-2xl text-slate-500" />
        <RiUserAddLine className="cursor-pointer text-2xl text-slate-500" />
      </div>
    </div>
  );
};

export default Nav;
