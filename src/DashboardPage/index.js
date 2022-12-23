import React from "react";
import home from "../assets/home-button.png";

const dashboardPage = (props) => {
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
          <div className="overflow-auto h-screen pb-24 px-4 wd:px-6 ">
            {props.children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default dashboardPage;
