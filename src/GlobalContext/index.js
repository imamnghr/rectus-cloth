import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    product_name: "",
    produt_type: "",
    jumlah: "",
    product_price: "",
  });
  const [currentId, setCurrentId] = useState(-1);

  const [fetchStatus, setFetchStatus] = useState(true);

  let state = {
    data,
    setData,
    input,
    setInput,
    currentId,
    setCurrentId,
    fetchStatus,
    setFetchStatus,
  };

  let navigate = useNavigate();
  const handleDelete = (e) => {
    let idData = parseInt(e.target.value);

    axios
      .delete(
        `http://localhost:3000/api/products/${idData}`
      )
      .then((res) => {
        setFetchStatus(true);
      });
  };

  const handleEdit = (e) => {
    let idData = parseInt(e.target.value);
    setCurrentId(idData);
    navigate(`/form/edit/${idData}`);

  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };

  let fetchData = () => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
        setData([...res.data.response]);
      })
      .catch((err) => { });
    setFetchStatus(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let { product_name, product_type, jumlah, product_price } = input;

    if (currentId === -1) {
      axios
        .post("http://localhost:3000/api/products", {
          product_name,
          product_type,
          jumlah,
          product_price
        })
        .then((res) => {
          setFetchStatus(true);
          navigate("/");
        });
    } else {
      axios
        .put(
          `http://localhost:3000/api/products/${currentId}`,
          { product_name, product_type, jumlah, product_price }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate("/");
        });
    }

    setCurrentId(-1);

    setInput({
      product_name: "",
      product_type: "",
      jumlah: "",
      product_price: "",
    });
  };

  let stateFunction = {
    handleDelete,
    handleEdit,
    handleInput,
    handleSubmit,
    fetchData,
  };
  return (
    <GlobalContext.Provider
      value={{
        state,
        stateFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
