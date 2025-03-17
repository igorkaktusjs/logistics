import React from "react";

/**
 * Table header for the DriverTable component.
 */
const DriverTableHeader: React.FC = () => {
  return (
    <thead>
      <tr className="bg-gray-100">
        <th className="p-2 border">Driver Name</th>
        <th className="p-2 border">Vehicle Reg</th>
        <th className="p-2 border">Total Activity Duration (min)</th>
        <th className="p-2 border">Drive (min)</th>
        <th className="p-2 border">Rest (min)</th>
        <th className="p-2 border">Work (min)</th>
        <th className="p-2 border">Available (min)</th>
        {(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const).map((day) => (
          <th key={day} className="p-2 border w-12">{day}</th>
        ))}
      </tr>
    </thead>
  );
};

export default React.memo(DriverTableHeader);
