import { AreaChart, BarChartHorizontalBig, Dot, EllipsisVertical, Gauge } from "lucide-react";
import React from "react";

const State = () => {
  return (
    <div>
     <div className="flex flex-col md:flex-row gap-4 p-4">
     
      <div className="flex-1 p-6 bg-white  rounded shadow-md">
      <div className="flex items-center justify-end">
      <EllipsisVertical className="text-gray-300" />
      </div>
      <h2 className="mb-4 text-white">gjcjgjyj</h2>

        <div className="mb-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4  rounded">
            
            <h3 className="text-md  uppercase text-center  mb-2 flex text-2xl"><Dot className="text-emerald-400"/> ur-65</h3>
            <p className="text-center flex items-center "><Gauge className=" ml-10 text-emerald-700"/></p>
          </div>
          <div className="flex-1 p-4 bg-white rounded">
          <h3 className="text-md  uppercase text-center  mb-2 flex text-2xl"><Dot className="text-orange-400  "/> rd-52</h3>
          <p className="text-center flex items-center "><Gauge className=" ml-10 text-orange-400"/></p>
          </div>
        </div>
        </div>
        
      </div>
      <div className="flex-1 p-6 bg-white   rounded shadow-md">
      <div className="flex items-center justify-end">
      <EllipsisVertical className="text-gray-300" />
      </div>
        <h2 className="text-2xl font-bold mb-2 text-white">Column 2</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4  rounded">
            <h3 className="text-sm   mb-2">
              Orgranic words
            </h3>
            <h1 className="text-2xl">
              1240 <span className="text-sm text-emerald-400">+11</span>
            </h1>
            <p className="uppercase text-sm text-gray-700">ppc +8</p>
          </div>
          <div className="flex-1 p-4  rounded">
         
            <p className="text-2xl">
            <AreaChart className="ml-10 my-5 text-emerald-400" />
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 bg-white   rounded shadow-md">
      <div className="flex items-center justify-end">
      <EllipsisVertical className="text-gray-300" />
      </div>
        <h2 className="text-2xl font-bold mb-2 text-white">Column 2</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4  rounded">
            <h3 className="text-sm   mb-2">
              Orgranic traffic
            </h3>
            <h1 className="text-2xl">
              6524 <span className="text-sm text-emerald-400">+245</span>
            </h1>
            <p className="uppercase text-sm text-gray-700">ppc +8</p>
          </div>
          <div className="flex-1 p-4  rounded">
         
            <p className="text-2xl">
          
            <BarChartHorizontalBig className="ml-10 my-5 text-emerald-400"/>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default State;
