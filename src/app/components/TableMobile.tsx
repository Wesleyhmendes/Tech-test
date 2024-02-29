'use client'
import React from 'react';
import Actions from './Actions';
import CarPicture from './Image';
import CustomRating from './Rating';
import {TableProps} from '../types/Props';

const TableMobile = ({ quantity }: TableProps) => {
  return (
    <>
      { quantity.map((number: number) => (
        <div
          key={ number }
          className="flex items-start justify-between p-4 border-b border-gray-200 md:hidden"
        >
          <div className="flex items-center">
            <CarPicture />
          </div>
          <div>
            <h2 className="text-xl text-[#111928]">Mini Cooper 2020</h2>
            <p className="text-[#6B7280] text-sm">Next reservation: 11/07</p>
            <CustomRating index={ number } />
          </div>
          <Actions />
        </div>
      )) }
    </>
  );
}

export default TableMobile;
