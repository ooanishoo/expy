import React from "react";
import FRM_ADD_ITEMS from "./FRM_ADD_ITEMS";
import FRM_HEADER_OPTIONS from "./FRM_HEADER_OPTIONS";

import {
  Navigation,
  Header,
} from "react-mdl";

function FRM_HEADER() {
  return (
    <Header title="Internmatch" className='Header' style={{backgroundColor: "#223A4D"}}>
      <Navigation>
        {/* search bar goes here */}
        <FRM_ADD_ITEMS />
        <div style={{marginRight:0}}/>
        {/* <Box m={2} />  */}
        <FRM_HEADER_OPTIONS />
      </Navigation>
    </Header>
  );
}

export default FRM_HEADER;
