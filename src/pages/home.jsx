import React from "react";
import Layout from "../components/layout";
export default () => (
  <Layout>
    <section>
      <Shield />
      <Circle size="small" />
      <Circle size="large" />
    </section>
  </Layout>
);

function Text() {
  return (
    <div className="shield-text absolute-center">
      <h1 className="title">CARDLATCH</h1>
      <p>building trust between digital and physical</p>
      <hr />
      <p className="text-light">
        Flexible and powerfull system <br /> suitable to small and large
        business
      </p>
      <button className="btn-cta">Contact Today</button>
    </div>
  );
}
function Shield() {
  return (
    <div className="shield">
      <Text />
      <svg
        width="828"
        height="1034"
        viewBox="0 0 828 1034"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke=""
      >
        <path
          d="M414 1034C414 1034 827.56 827.22 827.56 517V155.12L414 0L0.429993 155.12V517C0.429993 827.17 414 1034 414 1034Z"
          fill="#0E202D"
          className="shield-path"
        />
      </svg>
    </div>
  );
}

function Circle({ size }) {
  return (
    <div className={`circle absolute-center circle-${size}`}>
      <svg
        width="100%"
        viewBox="0 0 1336 1336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M668 1334.66C1036.19 1334.66 1334.67 1036.18 1334.67 667.99C1334.67 299.798 1036.19 1.32001 668 1.32001C299.808 1.32001 1.33008 299.798 1.33008 667.99C1.33008 1036.18 299.808 1334.66 668 1334.66Z"
          fill="#0A1622"
          stroke="#112435"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  );
}
