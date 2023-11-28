import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const PageLayout = (props) => {
  return (
    <div className="flex h-screen bg-slate-200">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
