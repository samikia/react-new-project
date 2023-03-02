import React from "react";
import Wrapper from "../../hoc/wrapper";
const Layout = (props) => {
  return (
    <Wrapper>
      <div>Navigation</div>
      <main className="content">{props.children}</main>
    </Wrapper>
  );
};
export default Layout;
