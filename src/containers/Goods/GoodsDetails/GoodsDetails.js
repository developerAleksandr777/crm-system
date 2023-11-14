import React from "react";
import SideBarWrapperHoc from "../../../hoc/SideBarWrapperHoc";
import { Space } from "antd";
import AntCard from "../../../components/AntCard/AntCard";
import { PRODUCTS_API } from "../../../config";
import detailsHoc from "../../../hoc/detailsHoc";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GoodsDetails = ({ state }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleNext = () => {
    if (state.id === 20) {
      navigate(`/products/${(state.id = 20)}`);
    } else {
      navigate(`/products/${state.id + 1}`);
    }
  };

  const handlePrev = () => {
    if (state.id === 1) {
      navigate(`/products/${(state.id = 1)}`);
    } else {
      navigate(`/products/${state.id - 1}`);
    }
  };

  return (
    <SideBarWrapperHoc>
      <Breadcrumb
        items={[
          {
            title: <a href="/">{t("Goods")}</a>,
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
          name="Goods"
        />
      </Space>
    </SideBarWrapperHoc>
  );
};

export default detailsHoc(GoodsDetails, PRODUCTS_API);
