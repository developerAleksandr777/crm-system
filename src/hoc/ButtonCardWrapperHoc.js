import React from "react";
import s from "./hoc.module.css";

const ButtonCardWrapperHoc = ({ children }) => {
  return <div className={s.buttonCardWrapperHoc}>{children}</div>;
};

export default ButtonCardWrapperHoc;
