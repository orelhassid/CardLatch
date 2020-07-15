import React from "react";
import Header from "./header";
export default ({ children }) => (
  <>
    <div className="site">
      <Header />
      <main>{children}</main>
    </div>
  </>
);
