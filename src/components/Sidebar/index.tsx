import Text from "@components/Text";
import { useAppDispatch, useAppSelector } from "@reduck/hooks";
import { setActiveSidebarItem } from "@reduck/slices/appSlice";
import { Link, useLocation } from "react-router";

import { useEffect } from "react";
import {
  SIDEBAR_ITEMS,
  type TSidebarItem,
  type TSidebarKey,
} from "./constants";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const activeItem = useAppSelector((state) => state.app.activeSidebarItem);

  useEffect(() => {
    setActiveItem(findItemByPath(location.pathname).value);
  }, [location.pathname]);

  const setActiveItem = (value: string) => {
    dispatch(setActiveSidebarItem(value));
  };

  const findItemByPath = (path: string): TSidebarItem => {
    for (const key of Object.keys(SIDEBAR_ITEMS)) {
      const item = SIDEBAR_ITEMS[key as TSidebarKey];
      if (item.path === path) {
        return item;
      }
    }
    return SIDEBAR_ITEMS.Home;
  };

  const renderItem = (item: TSidebarItem) => {
    const isActive = item.value === activeItem;
    return (
      <Link
        key={item.value}
        to={item.path}
        onClick={() => setActiveItem(item.value)}
        className={`w-full py-4 px-3 flex justify-start cursor-pointer ${isActive ? "bg-blue-300" : "hover:bg-blue-100"}`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <div className="h-full border-r border-r-gray-300">
      <div className="p-0">
        <div className="bg-[#1f2937] flex justify-center items-center">
          <Text className="text-[48px] font-bold text-[#ff6666]">TAP</Text>
        </div>
      </div>
      {Object.keys(SIDEBAR_ITEMS).map((key) =>
        renderItem(SIDEBAR_ITEMS[key as TSidebarKey])
      )}
    </div>
  );
};

export default Sidebar;
