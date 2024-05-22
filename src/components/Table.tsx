import { ArrowUpDown, Clock4, Menu } from "lucide-react";
import React from "react";

const Table = () => {
  return (
    <div>
      <div className="bg-white p-8 px-8 rounded-md shadow-2xl max-w-6xl w-screen">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <h1 className="font-bold capitalize">backlinks overview</h1>
            <span className="capitalize flex gap-2 text-gray-400">
              <Clock4 className="text-gray-400" /> last update 1 day ago
            </span>
          </div>
          <div className="">
            <div className="cursor-pointer bg-gray-300 capitalize rounded-md shadow-md px-4 py-2 sm:py-1 sm:px-2 md:py-2 md:px-4 md:mx-2 flex gap-2">
              filter <Menu />
            </div>
          </div>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-slate-400 text-left text-xs font-medium text-black uppercase tracking-wider ">
              url
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-slate-400 text-left text-xs font-medium text-black uppercase tracking-wider">
              da
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-slate-400 text-left text-xs font-medium text-black uppercase tracking-wider flex items-center">
              da
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-slate-400 text-left text-xs font-medium text-black uppercase tracking-wider">
              cf
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-slate-400 text-left text-xs font-medium text-black uppercase tracking-wider">
              tf
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-slate-400 text-left text-xs font-medium text-black uppercase tracking-wider">
              fb
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              https://youtube.com/watch?v=sZdmkif8csY 
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            https://youtube.com/
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 3
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 4
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 5
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 6
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 1
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 2
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 3
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 4
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 5
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 6
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 1
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 2
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 3
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 4
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 5
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Data 6
            </td>
          </tr>
          {/* Repeat the <tr> block for more rows */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
