import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "./Global.styles.scss";

import { useSelector, useDispatch } from "react-redux";
import HomePage from "./pages/home/home.component";
import Signin from "./pages/sign-in/sign-in.component";
import Header from "./components/header/header.component";
import SectionPageContainer from "./pages/section/section.container";
import HeaderQuery from "./components/header-query/header-query.component";
import ResultAdd from "./ResultAdd";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";
import { fetchSectionsStart } from "./redux/sections/sections.actions";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const [isBodyLocked, setIsBodyLocked] = useState(false);
  const bodyLockHandle = (isMenuActive) => {
    setIsBodyLocked(isMenuActive);
  };

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchSectionsStart());
  }, [dispatch]);

  return (
    <div className={`wrapper ${isBodyLocked ? "wrapper--locked" : ""}`}>
      <Header bodyLock={bodyLockHandle} />
      <main className="main">
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route
            path="/admin"
            element={currentUser ? <Navigate replace to="/" /> : <Signin />}
          />
          <Route
            path="/:sectionId"
            element={<SectionPageContainer currentUser={currentUser} />}
          />
          <Route path="/header" element={<HeaderQuery />} />
        </Routes>
      </main>
    </div>
  );
};
// <Route path={`/:sectionId/addCard`} element={<ResultAdd />} />

// <Route path="/about" element={<AboutPage />} />
// <Route path="/services" element={<ServicesPage />} />
// <Route path="/careers" element={<CareersPage />} />
// <Route path="/life" element={<LifePage />} />

export default App;
