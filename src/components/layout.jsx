import React from "react";
import Header from "./header";
import "../styles/layout.scss";
export default ({ children }) => (
  <>
    <div className="site">
      <Header />
      <main>{children}</main>
    </div>
  </>
);
