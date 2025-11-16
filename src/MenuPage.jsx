import React from "react";
import "./MenuPage.css";
import TopFooter from "./components/TopFooter/TopFooter";

const MenuPage = () => {
  return (
    <div>
      <TopFooter />
      {/* Optional spacing so footer does not overlap content */}
      <div style={{ marginTop: "40px" }}></div>
    </div>
  );
};

export default MenuPage;
