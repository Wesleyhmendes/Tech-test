import { Rating } from '@mui/material';
import { RatingProps } from '../types/Props';
import React, { SyntheticEvent, useState, useEffect } from 'react';

const CustomRating = ({ index }: RatingProps) => {
  const [starValue, setStarValue] = useState<number>(5);

  const handleChange = (event: SyntheticEvent<Element, Event>, newValue: number | null) => {
    if (newValue !== null) {
      setStarValue(newValue);
    }
  };

  return (
    <Rating
      name={`rating-${index}`}
      value={starValue}
      onChange={handleChange}
    />
  );
};

export default CustomRating;
