import React from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../GlobalContext";

const DashboardPage = () => {
  const { state } = useContext(GlobalContext);
  const { stateFunction } = useContext(GlobalContext);
  const { data, fetchStatus, setFetchStatus } = state;

  const { handleDelete, handleEdit, handleIndexScore, fetchData } =
    stateFunction;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData();
    }
  },[fetchStatus,setFetchStatus]);

  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">

      {/* Header */}
      <div className="flex items-start justify-between">

        {/* Sidebar */}
        <div className="h-screen hidden lg:block shadow-lg relative w-80">
          <div className="bg-white h-full dark:bg-gray-700">
            <div className="flex items-center justify-start pt-6 ml-8">
              <p className="font-bold dark:text-white text-xl">Dashboard</p>
            </div>
            <nav className="mt-6">
              <div>
                <span
                  className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4"
                  href="#"
                >
                  <span className="text-left">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      ></path>
                    </svg>
                  </span>
                  <span className="mx-2 text-sm font-normal">Home</span>
                </span>
              </div>
            </nav>
          </div>
        </div>


        <div className="flex flex-col w-full md:space-y-4">
          <header className="w-full bg-slate-800 h-16 z-40 flex items-center justify-between">

          </header>
          {/* content*/}
          {/* <div className="overflow-auto h-screen pb-24 px-4 wd:px-6 ">
            <div className="flex justify-center items-center h-screen">
              <table className="table-auto shadow-2x1  border-violet-500 w-9/12 h-3/4">
                <thead className="text-white">
                  <tr>
                    <th className="py-3 bg-violet-500 text-red rounded-tl-lg">No</th>
                    <th className="py-3 bg-violet-500 text-red">Product Name</th>
                    <th className="py-3 bg-violet-500 text-red">Product Type</th>
                    <th className="py-3 bg-violet-500 text-red">Jumlah</th>
                    <th className="py-3 bg-violet-500 text-red rounded-tr-lg">Product Price</th>
                  </tr>
                  {data !== null && data.map((res, index) => {
                    return (
                      <tr className=" border-b border-slate-300 text-black text-center shadow-lg">
                        <td className="py-3 px-6">{index + 1}</td>
                        <td className="py-3 px-6">{res.product_name}</td>
                        <td className="py-3 px-6">{res.product_type}</td>
                        <td className="py-3 px-6">{res.jumlah}</td>
                        <td className="py-3 px-6">{res.product_price}</td>
                      </tr>

                    )
                  })}
                </thead>

              </table>
            </div>
          </div> */}
          <div className="container px-8 mx-auto my-10">
            <Link to={"/form/create"}>
              <button className="bg-blue-500 mb-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                Create
              </button>
            </Link>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-violet-500 text-red rounded-tl-lg"
                    >
                      No
                    </th>
                    <th scope="col" className="py-3 px-6 bg-violet-500 text-red">
                      Product Name
                    </th>
                    <th scope="col" className="py-3 px-6 bg-violet-500 text-red">
                      Product Type
                    </th>
                    <th scope="col" className="py-3 px-6 bg-violet-500 text-red">
                      Jumlah
                    </th>
                    <th scope="col" className="py-3 px-6 bg-violet-500 text-red ">
                      Product Price
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-9 bg-violet-500 text-red rounded-tr-lg"
                    >
                      Action
                    </th>
                  </tr>
                  {data !== null &&
                    data.map((res, index) => {
                      return (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td className="py-4 px-6">{index + 1}</td>
                          <td className="py-4 px-6">{res.product_name}</td>
                          <td className="py-4 px-6">{res.product_type}</td>
                          <td className="py-4 px-6">{res.jumlah}</td>
                          <td className="py-4 px-6">{res.product_price}</td>
                          <td>
                            <button
                              onClick={handleEdit}
                              value={res.id}
                              className="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            >
                              Edit
                            </button>
                            <button
                              onClick={handleDelete}
                              value={res.id}
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
