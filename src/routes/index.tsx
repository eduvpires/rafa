import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ArticlesPage } from "../pages/ArticlesPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles" element={<ArticlesPage />} />
    </Routes>
  );
};
