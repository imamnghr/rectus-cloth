import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


const MainContent = () => {

  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        console.log(res);
        setData([...res.data]);
      })
      .catch((err) => {});
  }, []);


  return (
    <div className="flex justify-center items-center h-screen">
     <table className="table-auto shadow-2x1  border-violet-500 w-9/12 h-3/4">
      <thead className="text-white">
        <tr>
          <th className="py-3 bg-violet-500 text-red rounded-tl-lg">No</th>
          <th className="py-3 bg-violet-500 text-red">Nama</th>
          <th className="py-3 bg-violet-500 text-red">Mata Kuliah</th>
          <th className="py-3 bg-violet-500 text-red">Nilai</th>
          <th className="py-3 bg-violet-500 text-red rounded-tr-lg">Index Nilai</th>
        </tr>
        {data !== null && data.map((res, index) => {
          return( 
              <tr className=" border-b border-slate-300 text-black text-center shadow-lg">
                <td className="py-3 px-6">{index + 1}</td>  
                <td className="py-3 px-6">{res.name}</td>  
                <td className="py-3 px-6">{res.course}</td>
                <td className="py-3 px-6">{res.score}</td>
              </tr>
            
          )
        })}
      </thead>

     </table>
    </div>
  )
}


export default MainContent