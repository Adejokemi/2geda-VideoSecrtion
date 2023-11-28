import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/pageLayout";
import Dashboard from "./Components/Dashboard";
import TvPreview from "./Components/TvPreview";
import Search from "./Components/Search";
import Preview from "./Components/Preview";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/Dashboard"
          element={
            <PageLayout>
              <Dashboard />
            </PageLayout>
          }
        />


        <Route
          path="/TvPreview"
          element={
            <PageLayout>
              <TvPreview />
            </PageLayout>
          }
        />


        <Route
          path="/Search"
          element={
            <PageLayout>
              <Search />
            </PageLayout>
          }
        />

        <Route
          path="/Preview"
          element={
            <PageLayout>
              <Preview />
            </PageLayout>
          }
        />

      </Routes>
    </React.Fragment>
  );
}

export default App;
