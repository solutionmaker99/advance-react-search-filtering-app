import { Outlet } from "react-router-dom";
import Recommended from "../Pages/Shared/Recommended/Recommended";
import Nav from "../Pages/Shared/Nav/Nav";

const Main = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Recommended />
    </div>
  );
};

export default Main;
