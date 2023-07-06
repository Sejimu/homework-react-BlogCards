import React from "react";
import Favourites from "../pages/Favourites";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/AboutUs";
import Contacts from "../pages/Contacts";

function MainRoute() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default MainRoute;
