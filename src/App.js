import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import { SearchPage } from "./components/SearchPage";
import HomePage from "./components/HomePage/HomePage";
import { FavoritePage } from "./components/FavoritePage/FavoritePage";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<SearchPage />} />

        <Route path="/favorites" element={<FavoritePage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
