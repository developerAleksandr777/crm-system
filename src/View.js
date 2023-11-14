import React from "react";
import { Route, Routes } from "react-router-dom";
import Goods from "./containers/Goods/Goods";
import GoodsDetails from "./containers/Goods/GoodsDetails/GoodsDetails";
import Users from "./containers/Users/Users";
import UsersDetails from "./containers/Users/UsersDetails/UsersDetails";

const View = () => {
  return (
    <Routes>
      <Route path="/" element={<Goods />} />
      <Route path="/products/:id" element={<GoodsDetails />} />

      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UsersDetails />} />
    </Routes>
  );
};

export default View;
