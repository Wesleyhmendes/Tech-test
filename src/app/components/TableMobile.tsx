'use client'
import React from 'react';
import Actions from './Actions';
import CarPicture from './Image';
import CustomRating from './Rating';

const TableMobile = () => {
  return (
    <>
      {
        (() => {
          const lines = [];
          for (let i = 0; i < 3; i += 1) {
            lines.push(
              <div
                key={ i }
                className="flex items-start  justify-between p-4 border-b border-gray-200 md:hidden"
              >
                <div className="flex items-center">
                  <CarPicture />
                </div>
                <div>
                  <h2 className="text-xl text-[#111928]">Mini Cooper 2020</h2>
                  <p className="text-[#6B7280] text-sm">Next reservation: 11/07</p>
                  <CustomRating index={i} />
                </div>
                <Actions />
              </div>
            );
          }
          return lines;
        })()
      }
    </>
  );
}

export default TableMobile;
