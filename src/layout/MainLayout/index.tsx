import Sidebar from "@components/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="w-full h-full flex">
      <div className="w-[300px]">
        <Sidebar />
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
