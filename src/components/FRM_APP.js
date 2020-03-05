import React from "react";
import FRM_HEADER from "./FRM_HEADER";
import FRM_SIDEBAR from "./FRM_SIDEBAR";
import FRM_CONTENT from "./FRM_CONTENT";

import {
  Layout,
} from "react-mdl";

function FRM_APP() {
  return (
    <div className="demo-big-content">
      <Layout fixedHeader>
        <FRM_HEADER />
        <FRM_SIDEBAR />
        <FRM_CONTENT />
      </Layout>
    </div>
  );
}

export default FRM_APP;
