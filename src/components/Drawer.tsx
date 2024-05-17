"use client";
import { BarChartBig, Ellipsis, FileImage, GanttChart, Globe, LayoutGrid, PieChart, Settings, TableProperties, TriangleAlert } from "lucide-react";
import React, { useState } from "react";

interface DrawerProps {
  children: React.ReactNode;
}

const Drawer = ({ children }: DrawerProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white text-black flex flex-col transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 bg-white px-4">
          <span className="text-lg font-semibold capitalize text-blue-500 flex gap-4">
            site SEO <Globe />
          </span>
          <button
            className="text-gray-500 focus:outline-none focus:text-gray-600 lg:hidden"
            onClick={closeSidebar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto mt-2">
          <p className="capitalize mx-3 text-blue-500 font-bold">menu</p>
          <a
            href="#"
            className={`capitalize px-4 py-2 hover:bg-gray-100 flex justify-between ${
              activeItem === "overview" ? "bg-blue-100 text-blue-500" : ""
            }`}
            onClick={() => handleMenuItemClick("overview")}
          >
            overview <LayoutGrid />
          </a>
          <a
            href="#"
            className={`capitalize px-4 py-2 hover:bg-gray-100 flex justify-between ${
              activeItem === "issues" ? "bg-blue-100 text-blue-500" : ""
            }`}
            onClick={() => handleMenuItemClick("issues")}
          >
            issues <TriangleAlert />
          </a>
          <a
            href="#"
            className={`capitalize px-4 py-2 hover:bg-gray-100 flex justify-between ${
              activeItem === "crawler" ? "bg-blue-100 text-blue-500" : ""
            }`}
            onClick={() => handleMenuItemClick("crawler")}
          >
            crawler <Ellipsis />
          </a>
          <a
            href="#"
            className={`capitalize px-4 py-2 hover:bg-gray-100 flex justify-between ${
              activeItem === "content" ? "bg-blue-100 text-blue-500" : ""
            }`}
            onClick={() => handleMenuItemClick("content")}
          >
            content <TableProperties />
          </a>
          <a
            href="#"
            className={`capitalize px-4 py-2 hover:bg-gray-100 flex justify-between ${
              activeItem === "serp" ? "bg-blue-100 text-blue-500" : ""
            }`}
            onClick={() => handleMenuItemClick("serp")}
          >
            serp <BarChartBig />
          </a>
          <a
            href="#"
            className={`capitalize px-4 py-2 hover:bg-gray-100 flex justify-between ${
              activeItem === "pagespeed" ? "bg-blue-100 text-blue-500" : ""
            }`}
            onClick={() => handleMenuItemClick("pagespeed")}
          >
            pagespeed <GanttChart />
          </a>
          <a
            href="#"
            className={`capitalize px-4 py-2 hover:bg-gray-100 flex justify-between ${
              activeItem === "image" ? "bg-blue-100 text-blue-500" : ""
            }`}
            onClick={() => handleMenuItemClick("image")}
          >
            image <FileImage />
          </a>
          <a
            href="#"
            className={`capitalize px-4 py-2 hover:bg-gray-100 flex justify-between ${
              activeItem === "uptime" ? "bg-blue-100 text-blue-500" : ""
            }`}
            onClick={() => handleMenuItemClick("uptime")}
          >
            uptime <PieChart />
          </a>
          <a
            href="#"
            className={`capitalize px-4 py-2 hover:bg-gray-100 flex justify-between ${
              activeItem === "setting" ? "bg-blue-100 text-blue-500" : ""
            }`}
            onClick={() => handleMenuItemClick("setting")}
          >
            setting <Settings />
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Navbar */}
        <header className="flex items-center justify-between h-16 bg-white shadow px-6">
          <button
            className="lg:hidden text-gray-500 focus:outline-none focus:text-gray-600"
            onClick={toggleSidebar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="relative w-full max-w-xl ml-auto">
            <input
              type="text"
              className="w-full border rounded-lg py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
              placeholder="Search..."
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
              />
            </svg>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Drawer;
