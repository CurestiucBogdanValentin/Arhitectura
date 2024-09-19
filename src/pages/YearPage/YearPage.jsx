// src/components/YearPage.js
import React from 'react';

const YearPage = ({ year }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Year: {year}</h1>
      </div>
    </div>
  );
};

export default YearPage;
