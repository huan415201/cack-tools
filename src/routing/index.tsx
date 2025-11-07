import { SIDEBAR_ITEMS } from "@components/Sidebar/constants";
import MainLayout from "@layout/MainLayout";
import Home from "@pages/Home";
import KinhMach from "@pages/KinhMach";
import NoiCong from "@pages/NoiCong";
import { BrowserRouter, Route, Routes } from "react-router";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path={SIDEBAR_ITEMS.Home.path} element={<Home />} />
          <Route path={SIDEBAR_ITEMS.NoiCong.path} element={<NoiCong />} />
          <Route path={SIDEBAR_ITEMS.KinhMach.path} element={<KinhMach />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
