import { Rating } from '@mui/material';
import { RatingProps } from '../types/Props';
import React, { useState } from 'react';

const CustomRating = ({ index }: RatingProps) => {
  const [starValue, setStarValue] = useState<number>(5);

  const handleChange = (newValue: number | null) => {
    if (newValue !== null) {
      setStarValue(newValue as number);
    }
  };

  return (
    <Rating
      name={`rating-${index}`}
      value={starValue}
      onChange={(_event, newValue) => handleChange(newValue)}
    />
  );
};

export default CustomRating;