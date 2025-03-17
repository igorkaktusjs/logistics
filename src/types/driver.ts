import { Trace } from "./trace";

/**
 * Represents a driver and their associated activity logs.
 */
export interface Driver {
    id: number; // Unique identifier for the driver
    name: string; // Full name of the driver
    vehicleReg: string; // Vehicle registration number
    traces: Trace[]; // List of activity traces for the driver
    activity: boolean[]; // Boolean array indicating active days in a week
}

/**
 * Represents a driver object received from the API.
 * This structure differs from the internal `Driver` interface
 * as it uses different naming conventions and requires transformation.
 */
export interface ApiDriver {
    driverID: number; // Unique identifier for the driver in API response
    forename: string; // Driver's first name
    surname: string; // Driver's last name
    vehicleRegistration: string; // Vehicle registration number from API
    traces: Trace[]; // List of activity traces for the driver
}

/**
 * Props for the DriverTable component.
 * Used to pass a list of drivers to be displayed in the table.
 */
export interface DriverTableProps {
    drivers: Driver[]; // Array of driver objects
}