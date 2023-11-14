import React, { useMemo, useContext } from "react";
import { Table } from "antd";
import fetchHoc from "../../hoc/fetchHoc";
import { USERS_API } from "../../config";
import SideBarWrapperHoc from "../../hoc/SideBarWrapperHoc";
import { generateColumnsUsers } from "../../constants";
import { useNavigate } from "react-router-dom";
import Search from "../../components/Search/Search";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { useTranslation } from "react-i18next";
import PageNavigationWrapperHoc from "../../hoc/PageNavigationWrapperHoc";
import s from "./Users.module.css";
import { DataContext } from "../../Context";

const Users = ({ state, loading }) => {
  const { t } = useTranslation();
  const { paginationState, setPaginationState } = useContext(DataContext);

  console.log(state);

  const navigate = useNavigate();

  const handlePaginationChange = (page, pageSize) => {
    setPaginationState({ page: page, pageSize: pageSize });
  };

  const handleSearch = (search) => {
    setPaginationState({ search, page: 1 });
  };

  const handleChange = (value) => {
    setPaginationState({ radio: value });
  };

  const handleRowClick = (record) => {
    console.log(record.id);
    navigate(`/users/${record.id}`);
  };

  const newFilteredState = useMemo(() => {
    return state.filter((el) => {
      if (paginationState.radio === "Yes" && !el.favorite) return false;
      if (paginationState.radio === "No" && el.favorite) return false;
      const checkValue = !el.username
        .toLowerCase()
        .includes(paginationState.search.toLowerCase());
      if (paginationState.search && checkValue) return false;
      return true;
    });
  }, [paginationState.search, state, paginationState.radio]);

  return (
    <SideBarWrapperHoc>
      <h2 className={s.titleOfUsers}>{t("Users")}</h2>
      <PageNavigationWrapperHoc>
        <Search
          handleSearch={handleSearch}
          paginationState={paginationState}
          placeholder={t("Search by UserName")}
        />
        <RadioGroup
          handleChange={(e) => handleChange(e.target.value)}
          value={paginationState.radio}
        />
      </PageNavigationWrapperHoc>

      <Table
        dataSource={newFilteredState}
        columns={generateColumnsUsers({ t })}
        rowKey="id"
        loading={loading}
        pagination={{
          pageSize: paginationState.pageSize,
          onShowSizeChange: handlePaginationChange,
          current: paginationState.page,
          onChange: handlePaginationChange,
          pageSizeOptions: ["1", "5", "10", "20"],
          showSizeChanger: true,
        }}
        scroll={{ y: 400 }}
        onRow={(record) => ({
          onDoubleClick: () => handleRowClick(record),
        })}
      />
    </SideBarWrapperHoc>
  );
};

export default fetchHoc(Users, USERS_API);
