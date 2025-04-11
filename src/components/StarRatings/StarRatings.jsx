"use client";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

const StarRatings = ({ ratingStyle }) => {
  const [rating, setRating] = useState(3);

  return (
    <Rating
      style={ratingStyle}
      className="max-w-[180px]"
      readOnly
      value={rating}
      onChange={setRating}
    />
  );
};

export default StarRatings;
