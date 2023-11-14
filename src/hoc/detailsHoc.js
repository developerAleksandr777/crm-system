import React, { useState, useEffect } from "react";
import { axiosAPI } from "../axios";
import { useParams } from "react-router-dom";

const detailsHoc = (Component, url) => (props) => {
  const [dataState, setDataState] = useState({
    data: {},
    loading: true,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axiosAPI.get(url + id);
        const responseData = response.data;
        const newResponse = {
          ...response.data,
          favorite: responseData.id % 2 === 0 ? false : true,
        };
        console.log(newResponse);

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
  }, [id]);

  return (
    <Component {...props} state={dataState.data} loading={dataState.loading} />
  );
};

export default detailsHoc;
