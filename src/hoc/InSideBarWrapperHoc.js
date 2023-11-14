import React from "react";
import s from "./hoc.module.css";

const InSideBarWrapperHoc = ({ children }) => {
  return <div className={s.inSideBarWrapperHoc}>{children}</div>;
};

export default InSideBarWrapperHoc;
