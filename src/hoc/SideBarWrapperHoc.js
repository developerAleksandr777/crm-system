import React from "react";
import s from "./hoc.module.css";

const SideBarWrapperHoc = ({ children }) => {
  return <div className={s.sideBarWrapperHoc}>{children}</div>;
};

export default SideBarWrapperHoc;
