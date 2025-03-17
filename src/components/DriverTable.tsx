import React, { useMemo } from "react";
import { DriverTableProps } from "../types";
import DriverTableHeader from "./DriverTableHeader";
import DriverTableRow from "./DriverTableRow";

/**
 * Renders a table displaying driver data.
 */
const DriverTable: React.FC<DriverTableProps> = React.memo(({ drivers }) => {
  const memoizedDrivers = useMemo(() => drivers, [drivers]);

  return (
    <table className="w-full table-auto border-collapse bg-white shadow-md">
      <DriverTableHeader />
      <tbody>
        {memoizedDrivers.map((driver) => (
          <DriverTableRow key={driver.id} driver={driver} />
        ))}
      </tbody>
    </table>
  );
});

export default DriverTable;
