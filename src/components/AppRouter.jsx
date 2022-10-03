import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
  const isAuth = true;
  return (
    isAuth ?
    <Routes>
      {privateRoutes.map((route, index) =>
        <Route
          key={index}
          element={<route.element/>}
          path={route.path}
        >
        </Route>
      )}
      <Route path="*" element={<Navigate to='/posts' replace />} />
    </Routes>
    :
    <Routes>
      {publicRoutes.map((route, index) =>
        <Route
          key={index}
          element={<route.element/>}
          path={route.path}
        >
        </Route>
      )}
        <Route path="*" element={<Navigate to='/login' replace />} />
    </Routes>
  )
};

export default AppRouter;