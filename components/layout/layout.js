import { Fragment } from "react";
import MainHeader from "./main-header";
//🧭🧭[NAVIGATION BAR]🧭🧭

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
