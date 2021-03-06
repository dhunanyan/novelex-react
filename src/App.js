import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "./Global.styles.css";

import { useSelector, useDispatch } from "react-redux";
import HomePage from "./pages/home/home.component";
import Signin from "./pages/sign-in/sign-in.component";
import Header from "./components/header/header.component";
import SectionPageContainer from "./pages/section/section.container";
import HeaderQuery from "./components/header-query/header-query.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";
import { fetchSectionsStart } from "./redux/sections/sections.actions";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const [isBodyLocked, setIsBodyLocked] = useState(false);
  const bodyLockHandle = (bool) => {
    setIsBodyLocked(bool);
  };

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchSectionsStart());
  }, [dispatch]);

  return (
    <div className="wrapper">
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
            element={
              <SectionPageContainer
                currentUser={currentUser}
                bodyLock={bodyLockHandle}
              />
            }
          />
          <Route path="/header" element={<HeaderQuery />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
