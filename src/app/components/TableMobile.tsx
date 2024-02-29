'use client'
import carPic from '../../../public/mini_coper.jpg';
import Image from 'next/image';
import { Rating } from '@mui/material';
import React, { SyntheticEvent, useState, useEffect } from 'react';
import Actions from './Actions';
import CarPicture from './Image';
import Indicator from '../../../public/Indicators.png';

const TableMobile = () => {
  const [starValues, setStarValues] = useState<number[]>(() => {
    const storedStarValues = localStorage.getItem('starValues');

    return storedStarValues ? JSON.parse(storedStarValues) : [5, 5, 5, 5, 5, 5];
  });

  const columns = ['CAR', 'NEXT RESERVATION', 'STATUS', 'RATING', 'ACTIONS'];

  const handleChange = (index: number, event: SyntheticEvent<Element, Event>) => {
    const { target } = event;
    const value = Number((target as HTMLButtonElement).value);

    const newStarValues = [...starValues];
    newStarValues[index] = value;

    setStarValues(newStarValues);
  }

  useEffect(() => {
    localStorage.setItem('starValues', JSON.stringify(starValues));
  }, [starValues]);
  return (
    <>
      {
        (() => {
          const lines = [];
          for (let i = 0; i < 3; i += 1) {
            lines.push(
              <div key={ i } className="flex items-start  justify-between p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <CarPicture />
                </div>
                <div>
                  <h2 className="text-xl text-[#111928]">Mini Cooper 2020</h2>
                  <p className="text-[#6B7280] text-sm">Next reservation: 11/07</p>
                  <Rating
                    name={ `rating-${i}` }
                    value={ starValues[i] }
                    onChange={ (event) => handleChange(i, event) }
                  />
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
