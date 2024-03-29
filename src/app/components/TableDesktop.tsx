'use client'
import React from 'react';
import Actions from './Actions';
import CarPicture from './Image';
import CustomRating from './Rating';
import {TableProps} from '../types/Props';

const TableDesktop = ({ quantity }: TableProps) => {
  const columns = ['CAR', 'NEXT RESERVATION', 'STATUS', 'RATING', 'ACTIONS'];

  return (
    <div className="hidden overflow-x-auto h-screen md:flex justify-center items-center">
      <table
        className="table-auto w-11/12 mx-auto border-collapse border rounded-lg border-gray-200"
      >
        <thead className="bg-[#F9FAFB]">
          <tr className="text-left">
            {
              columns.map((column) => (
                <th
                  key={ column }
                  className="px-4 py-2 border-gray-200 text-[#6B7280]"
                >
                  { column }
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
        {quantity.map((number: number) => (
            <tr key={number}>
              <td className="px-4 py-2 border border-gray-200">
                <CarPicture />
              </td>
              <td className="px-4 py-2 border border-gray-200">
                Jul 6 - Jul 12
              </td>
              <td className="px-4 py-2 border border-gray-200">
                <button className="text-[#03543F] rounded-md bg-[#DEF7EC] px-2.5">
                  Available
                </button>
              </td>
              <td className="px-4 py-2 border border-gray-200">
                <CustomRating index={number - 1} />
              </td>
              <td className="px-4 py-2 border border-gray-200 items-center">
                <Actions />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDesktop;