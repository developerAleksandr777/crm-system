import React from "react";
import s from "./hoc.module.css";

const PageNavigationWrapperHoc = ({ children }) => {
  return <div className={s.pageNavigationWrapperHoc}>{children}</div>;
};

export default PageNavigationWrapperHoc;
