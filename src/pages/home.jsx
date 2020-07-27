import React from "react";
import Layout from "../components/layout";
import Icons from "../components/icons/icons";
import Section from "../components/section";
import SectionCenter from "../components/sectionCenter";

import Overnight from "../animations/overnight.js";
import Hardware from "../animations/hardware.js";
import Analytics from "../animations/analytics.js";
import Alerts from "../animations/alerts.js";

import Number1 from "../animations/number1.js";
import Number2 from "../animations/number2.js";
import Number3 from "../animations/number3.js";
import Number4 from "../animations/number4.js";

export default () => (
  <Layout>
    <SectionCenter>
      <Shield />
      <Circle size="small" />
      <Circle size="large" />
      <Icons />
    </SectionCenter>

    <Section
      title="Overnight Upgrade"
      description="A user experience software that integrates with your current access control seamlessly."
      animation={<Overnight />}
      number={<Number1 />}
    ></Section>

    <Section
      title="No Dedicated HW Required"
      description="multi-layer of security software-based only, offering multi-layer security.no need of expensive hardware replacement."
      animation={<Hardware />}
      number={<Number2 />}
    ></Section>

    <Section
      title="Immediate Alert Rapid Action"
      description="Cardlatch detects real time events, helping stop ongoing attacks"
      animation={<Alerts />}
      number={<Number3 />}
    ></Section>

    <Section
      title="Advanced Analytics"
      description="AI/ML-based system that reflects business Intelligence in real-time and provides a recommended course of action"
      animation={<Analytics />}
      number={<Number4 />}
    ></Section>
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
      <a href="mailto:baruchkahlon@cardlatch.com">
        <button className="btn-cta">Contact Today</button>
      </a>
    </div>
  );
}
function Shield() {
  return (
    <div className="shield">
      <Text />
      <svg
        width="100%"
        // width="828"
        // height="1034"
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
  return <div className={`circle absolute-center circle-${size}`}></div>;
}
