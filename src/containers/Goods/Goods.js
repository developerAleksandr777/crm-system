import React, { useMemo, useContext } from "react";
import { Table } from "antd";
import fetchHoc from "../../hoc/fetchHoc";
import { PRODUCTS_API } from "../../config";
import SideBarWrapperHoc from "../../hoc/SideBarWrapperHoc";
import { generateColumns } from "../../constants";
import { useNavigate } from "react-router-dom";
import Search from "../../components/Search/Search";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import AntModal from "../../components/AntModal/AntModal";
import { useFilters } from "../../custom hook/useFilter";
import { useTranslation } from "react-i18next";
import s from "./Goods.module.css";
import PageNavigationWrapperHoc from "../../hoc/PageNavigationWrapperHoc";
import { DataContext } from "../../Context";

const Goods = ({ state, loading }) => {
  const { t } = useTranslation();
  const { paginationState, setPaginationState } = useContext(DataContext);
  const [filter] = useFilters();

  const arrayOfCategories = state.map((el) => {
    return [el.category];
  });
  const newArr = arrayOfCategories.flat(Infinity);
  const arrayGoodCategory = new Set(newArr);

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
    navigate(`/products/${record.id}`);
  };

  const newFilteredState = useMemo(() => {
    return state.filter((el) => {
      if (paginationState.radio === "Yes" && !el.favorite) return false;
      if (paginationState.radio === "No" && el.favorite) return false;
      const checkValue = !el.title
        .toLowerCase()
        .includes(paginationState.search.toLowerCase());
      if (paginationState.search && checkValue) return false;
      const checkBox = !filter.category?.includes(el.category);
      if (filter.category?.length > 0 && checkBox) return false;
      return true;
    });
  }, [paginationState.search, state, paginationState.radio, filter.category]);

  return (
    <SideBarWrapperHoc>
      <h2 className={s.titleOfGoods}>{t("Goods")}</h2>
      <PageNavigationWrapperHoc>
        <Search
          handleSearch={handleSearch}
          paginationState={paginationState}
          placeholder={t("Search by title")}
        />
        <RadioGroup
          handleChange={(e) => handleChange(e.target.value)}
          value={paginationState.radio}
        />
        <AntModal arrayGoodCategory={arrayGoodCategory} title={t("Filter")} />
      </PageNavigationWrapperHoc>

      <Table
        dataSource={newFilteredState}
        columns={generateColumns({ t })}
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

export default fetchHoc(Goods, PRODUCTS_API);
