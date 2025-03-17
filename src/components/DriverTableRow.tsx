import React from "react";
import { Driver } from "../types";
import { calculateActivity, calculateActivityBreakdown } from "../utils/calculateActivity";
import ActivitySquare from "../components/ui/ActivitySquare";

/**
 * Renders a single row in the DriverTable.
 */
const DriverTableRow: React.FC<{ driver: Driver }> = ({ driver }) => {
  const { totalActivity, activity } = calculateActivity(driver.traces ?? []);
  const breakdown = calculateActivityBreakdown(driver.traces ?? []);

  return (
    <tr key={driver.id} className="group text-center">
      <td className="p-2 border text-left w-52 bg-gray-50 group-odd:bg-gray-100">{driver.name}</td>
      <td className="p-2 border bg-gray-100 group-odd:bg-gray-50">{driver.vehicleReg}</td>
      <td className="p-2 border bg-gray-50 group-odd:bg-gray-100">{totalActivity}</td>
      <td className="p-2 border bg-gray-100 group-odd:bg-gray-50">{breakdown.drive}</td>
      <td className="p-2 border bg-gray-50 group-odd:bg-gray-100">{breakdown.rest}</td>
      <td className="p-2 border bg-gray-100 group-odd:bg-gray-50">{breakdown.work}</td>
      <td className="p-2 border bg-gray-50 group-odd:bg-gray-100">{breakdown.available}</td>
      {Array.from({ length: 7 }, (_, index) => (
        <td key={index} className="p-2 border w-6 h-6">
          <ActivitySquare active={!!activity?.[index]} />
        </td>
      ))}
    </tr>
  );
};

export default React.memo(DriverTableRow);
