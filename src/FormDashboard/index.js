import React, { useEffect, useContext, } from "react";
import { GlobalContext } from "../GlobalContext";
import { useParams } from "react-router-dom"
import axios from "axios";

const FormDashboard = () => {
  const { state, stateFunction } = useContext(GlobalContext);
  const { input, setInput } = state;
  let { IdData } = useParams();

  useEffect(() => {
    if (IdData !== undefined) {
      axios
        .get(`http://localhost:3000/api/products/${IdData}`)
        .then((res) => {
          let data = res.data.response;

          setInput({
            product_name: data.product_name,
            product_type: data.product_type,
            jumlah: data.jumlah,
            product_price: data.product_price
          });
        });
    }
    return () => {
      setInput({
        product_name: '',
        product_type: '',
        jumlah: '',
        product_price : 0,
      });
    }
  }, []);

  const { handleInput, handleSubmit } = stateFunction;


  return (
    <div className="mx-28 ">
      <form className="container mx-auto mt-20" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Product Name
          </label>
          <input
            onChange={handleInput}
            value={input.product_name}
            name="product_name"
            type="text"
            className="w-full rounded bg-gray-50 border border-gray-400 dark:focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Product Type
          </label>
          <input
            onChange={handleInput}
            value={input.product_type}
            name="product_type"
            type="text"
            className="w-full rounded bg-gray-50 border border-gray-400 dark:focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            jumlah
          </label>
          <input
            onChange={handleInput}
            value={input.jumlah}
            name="jumlah"
            type="text"
            className="w-full rounded bg-gray-50 border border-gray-400 dark:focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Product Price
          </label>
          <input
            onChange={handleInput}
            value={input.product_price}
            name="product_price"
            type="text"
            className="w-full rounded bg-gray-50 border border-gray-400 dark:focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};


export default FormDashboard