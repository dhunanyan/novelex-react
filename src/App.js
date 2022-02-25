import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import HomePage from "./pages/home/home.component";
import AboutPage from "./pages/about/about.component";
import ServicesPage from "./pages/services/services.component";
import CareersPage from "./pages/careers/careers.component";
import LifePage from "./pages/life/life.component";
import Signin from "./pages/sign-in/sign-in.component";
import Header from "./components/header/header.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/life" element={<LifePage />} />
          <Route
            path="/admin"
            element={currentUser ? <Navigate replace to="/" /> : <Signin />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
