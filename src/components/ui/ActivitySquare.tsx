import React from "react";

interface ActivitySquareProps {
  active: boolean;
}

const ActivitySquare: React.FC<ActivitySquareProps> = ({ active }) => {
  return (
    <div
      className={` h-6 rounded-md shadow-md ${
        active ? "bg-green-500" : "bg-gray-100"
      }`}
    />
  );
};

export default ActivitySquare;
