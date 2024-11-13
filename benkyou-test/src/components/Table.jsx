/* eslint-disable no-unused-vars */
// src/components/Table.js
import React from "react";

const Table = () => {
  const data = [
    { id: 1, name: "Habibi", number: "088654473362", age: 30 },
    { id: 2, name: "Hasbullah", number: "087693326612", age: 27 },
    { id: 3, name: "Chiev", number: "087609073912", age: 32 },
  ];

  return (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">ID</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Number</th>
          <th className="border border-gray-300 px-4 py-2">Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="text-center">
            <td className="border border-gray-300 px-4 py-2">{item.id}</td>
            <td className="border border-gray-300 px-4 py-2">{item.name}</td>
            <td className="border border-gray-300 px-4 py-2">{item.number}</td>
            <td className="border border-gray-300 px-4 py-2">{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
