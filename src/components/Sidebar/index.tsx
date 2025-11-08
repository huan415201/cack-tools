import Text from "@components/Text";
import { useState } from "react";
import { Link } from "react-router";

import {
  SIDEBAR_ITEMS,
  type TSidebarItem,
  type TSidebarKey,
} from "./constants";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>(
    SIDEBAR_ITEMS.Home.value,
  );

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
        renderItem(SIDEBAR_ITEMS[key as TSidebarKey]),
      )}
    </div>
  );
};

export default Sidebar;
