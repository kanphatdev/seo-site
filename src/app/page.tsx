"use client";

import Drawer from "@/components/Drawer";
import Health from "@/components/Health";
import SeoLinks from "@/components/SeoLinks";
import State from "@/components/State";
import Table from "@/components/Table";

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
            <div className="  my-4 flex gap-4 justify-between py-8 px-3">
              <div className="flex justify-center items-center ">
                <Health/>
              </div>
              <div className="">
                <SeoLinks/>
              </div>
            </div>
           
          </div>
        </div>
      </main>
    </Drawer>
  );
}
