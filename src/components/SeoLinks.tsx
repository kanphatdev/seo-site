import { Dot } from "lucide-react";
import React from "react";

const SeoLinks = () => {
  return (
    <div className="bg-white p-8 px-8 rounded-lg shadow-2xl max-w-4xl">
      <div className="">
        <div className="">
          <h1 className="capitalize flex justify-between gap-8 font-bold">
            links<span className="">100</span>
          </h1>
          <progress
            className="progress progress-warning w-56"
            value="100"
            max="100"
          ></progress>
        </div>
        <div className="flex justify-between items-center mt-auto py-14">
          <div className="">
            <p className="flex capitalize">
              <Dot  className="text-blue-400"/> nofollow
            </p>
            <p className="flex capitalize">
              <Dot  className="text-orange-400"/>dofollow
            </p>
            <p className="flex capitalize">
              <Dot className="text-emerald-400"/>noreferer
            </p>
            <p className="flex capitalize">
              <Dot className="text-red-400"/>noopener
            </p>
          </div>
          <div className="">
            <h1 className="">23</h1>
            <h1 className="">663</h1>
            <h1 className="">45</h1>
            <h1 className="">102</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoLinks;
