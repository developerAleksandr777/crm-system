import React from "react";
import s from "./Sidebar.module.css";
import { Menu } from "antd";
import { CheckCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Translate from "../Translate/Translate";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../custom hook/useTheme";
import { Switch } from "antd";
import InSideBarWrapperHoc from "../../hoc/InSideBarWrapperHoc";

const Sidebar = () => {
  const { t } = useTranslation();

  const { theme, setTheme } = useTheme();

  const handleThemeChange = (checked) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
  };

  const menuItems = [
    { key: "1", icon: <CheckCircleOutlined />, link: "/", label: t("Goods") },
    {
      key: "2",
      icon: <UserOutlined />,
      link: "/users",
      label: t("Users"),
    },
  ];

  return (
    <div className={s.sidebar}>
      <h2>{t("CRM System")}</h2>
      <InSideBarWrapperHoc>
        <Switch checked={theme === "dark"} onChange={handleThemeChange} />
        <Translate />
      </InSideBarWrapperHoc>

      <Menu defaultSelectedKeys={["1"]}>
        {menuItems.map((item) => {
          return (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.link}>{item.label}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};

export default Sidebar;
