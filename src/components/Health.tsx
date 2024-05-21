import {
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  Heart,
  Shield,
} from "lucide-react";
import React from "react";

const Health = () => {
  return (
    <div className="bg-white p-8 px-8 rounded-lg shadow-2xl max-w-4xl">
      <h1 className="text-lg capitalize font-bold flex justify-between mb-4">
        site health <EllipsisVertical className="text-gray-300" />
      </h1>
      <p className="text-sm capitalize text-gray-400">
        . overview the site health is good
      </p>
      <div className="flex py-4 items-center gap-4">
        <progress
          className="progress progress-primary w-screen"
          value="95"
          max="100"
        ></progress>
        <p className="capitalize text-gray-300">interactive</p>
      </div>
      <div className="flex py-4 items-center gap-4">
        <progress
          className="progress progress-warning w-screen"
          value="67"
          max="100"
        ></progress>
        <p className="capitalize text-gray-300">page</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex gap-3 items-center">
            <div className="cursor-pointer bg-blue-400 capitalize  rounded-md shadow-md px-4 py-2 sm:py-1 sm:px-2 md:py-2 md:px-4 md:mx-2">
              <Shield className="text-white" />
            </div>
            <p className="capitalize">interactive</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="cursor-pointer bg-orange-400 capitalize  rounded-md shadow-md px-4 py-2 sm:py-1 sm:px-2 md:py-2 md:px-4 md:mx-2">
              <Heart className="text-white" />
            </div>
            <p className="capitalize">page</p>
          </div>
        </div>
        <div className="my-3">
          <div className="flex gap-3 items-center">
            <button className="cursor-pointer bg-gray-200 capitalize  rounded-md shadow-md px-4 py-2 sm:py-1 sm:px-2 md:py-2 md:px-4 md:mx-2">
              <ChevronLeft />
            </button>
            <h2 className="">2</h2>
            <button className="cursor-pointer bg-gray-200 capitalize  rounded-md shadow-md px-4 py-2 sm:py-1 sm:px-2 md:py-2 md:px-4 md:mx-2">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
