import React, { useState, useEffect } from "react";
import { axiosAPI } from "../axios";

const fetchHoc = (Component, url) => (props) => {
  const [dataState, setDataState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axiosAPI.get(url);
        const newResponse = response.data.map((el, index) =>
          index % 2 === 0
            ? { ...el, favorite: true }
            : { ...el, favorite: false }
        );
        setDataState((prev) => ({
          ...prev,
          data: newResponse,
          loading: false,
          error: null,
        }));
      } catch (e) {
        setDataState((prev) => ({
          ...prev,
          loading: false,
          error: null,
        }));
      }
    };
    fetchAPI();
  }, []);

  return (
    <Component {...props} state={dataState.data} loading={dataState.loading} />
  );
};

export default fetchHoc;
