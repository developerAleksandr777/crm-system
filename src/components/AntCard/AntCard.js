import React from "react";
import { Card } from "antd";
import { useTranslation } from "react-i18next";
import AntButton from "../AntButton/AntButton";
import ButtonCardWrapperHoc from "../../hoc/ButtonCardWrapperHoc";

const AntCard = ({ state, handleHome, handleNext, handlePrev, name }) => {
  const { t } = useTranslation();

  return (
    <Card title={state.id} style={{ width: "300px" }}>
      {name === "Users" && (
        <>
          <h4>{`${t("Name")}: ${state.name?.firstname} ${
            state.name?.lastname
          }`}</h4>
          <h4>{`${t("Phone")}: ${state.phone}`}</h4>
          <h4>{`${t("Email")}: ${state.email}`}</h4>
          <h4>{`${t("City")}: ${state.address?.city} | ${t("Street")}:${
            state.address?.street
          }`}</h4>
          <h4>{state.favorite ? t("Yes") : t("No")}</h4>
        </>
      )}
      {name === "Goods" && (
        <>
          <h4>{`${t("Title")}: ${state.title}`}</h4>
          <h4>{`${t("Category")}: ${state.category}`}</h4>
          <p>{`${t("Description")}: ${state.description}`}</p>
          <h4>{`${t("Price")}:${state.price}`}</h4>
          <h4>{state.favorite ? t("Yes") : t("No")}</h4>
        </>
      )}

      <ButtonCardWrapperHoc>
        <AntButton func={handlePrev} type="primary" title="Prev" />

        <AntButton func={handleNext} type="primary" title="Next" />
        <AntButton func={handleHome} type="primary" title="Back" />
      </ButtonCardWrapperHoc>
    </Card>
  );
};

export default AntCard;
