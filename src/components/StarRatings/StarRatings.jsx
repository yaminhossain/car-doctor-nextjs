"use client";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

const StarRatings = ({ ratingStyle,ratingProps }) => {
  const [rating, setRating] = useState(3);

  return (
    <Rating
      style={ratingStyle}
      className="max-w-[180px]"
      readOnly
      value={ratingProps || rating}
      onChange={setRating}
    />
  );
};

export default StarRatings;
