import { Rating } from '@mui/material';
import React, { SyntheticEvent, useState, useEffect } from 'react';

interface RatingProps {
  index: number;
}

const CustomRating = ({ index }: RatingProps) => {
  const [starValues, setStarValues] = useState<number[]>(() => {
    const storedStarValues = localStorage.getItem('starValues');
    return storedStarValues ? JSON.parse(storedStarValues) : [5, 5, 5, 5, 5, 5];
  });

  const handleChange = (event: SyntheticEvent<Element, Event>) => {
    const { target } = event;
    const value = Number((target as HTMLButtonElement).value);

    const newStarValues = [...starValues];
    newStarValues[index] = value;
    
    setStarValues(newStarValues);
  };

  useEffect(() => {
    localStorage.setItem('starValues', JSON.stringify(starValues));
  }, [starValues]);

  return (
    <Rating
      name={`rating-${index}`}
      value={starValues[index]}
      onChange={(event) => handleChange(event)}
    />
  );
};

export default CustomRating;
