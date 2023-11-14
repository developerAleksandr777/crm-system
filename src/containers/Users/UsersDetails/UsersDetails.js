import React from "react";
import SideBarWrapperHoc from "../../../hoc/SideBarWrapperHoc";
import { Space } from "antd";
import AntCard from "../../../components/AntCard/AntCard";
import { USERS_API } from "../../../config";
import detailsHoc from "../../../hoc/detailsHoc";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UsersDetails = ({ state }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/users");
  };

  const handleNext = () => {
    if (state.id === 20) {
      navigate(`/users/${(state.id = 10)}`);
    } else {
      navigate(`/users/${state.id + 1}`);
    }
  };

  const handlePrev = () => {
    if (state.id === 1) {
      navigate(`/users/${(state.id = 1)}`);
    } else {
      navigate(`/users/${state.id - 1}`);
    }
  };

  return (
    <SideBarWrapperHoc>
      <Breadcrumb
        items={[
          {
            title: <a href="/users">{t("Users")}</a>,
          },
          {
            title: state.id,
          },
        ]}
      />
      <Space direction="vertical" size={16}>
        <AntCard
          state={state}
          handleHome={handleHome}
          handleNext={handleNext}
          handlePrev={handlePrev}
          name="Users"
        />
      </Space>
    </SideBarWrapperHoc>
  );
};

export default detailsHoc(UsersDetails, USERS_API);
