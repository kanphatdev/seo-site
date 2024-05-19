"use client";

import Drawer from "@/components/Drawer";
import State from "@/components/State";

export default function Home() {
  return (
    <Drawer>
      <main>
        <h1 className="text-2xl font-semibold text-gray-800 capitalize">
          home
        </h1>
        <div className="container ">
          <div className="py-8 px-3  my-4">
            <State/>
          </div>
          <div className="">
            <div className=" bg-red-400 my-4 flex gap-4 justify-between py-8 px-3">
              <div className="flex justify-center items-center">
                seo health
              </div>
              <div className="">
                links
              </div>
            </div>
            <div className="bg-red-400 my-4 flex gap-4  py-8 px-3"></div>
          </div>
        </div>
      </main>
    </Drawer>
  );
}
