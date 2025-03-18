import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";
import { calculateActivity, calculateActivityBreakdown } from "../utils/calculateActivity";
import { Driver, Trace, ApiDriver } from "../types";

interface FetchDriversOptions {
  url: string;
  queryOptions?: UseQueryOptions<Driver[], Error>;
}

/**
 * Fetches driver data from the API and processes it.
 */
const fetchDrivers = async (url: string): Promise<Driver[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch drivers");

    const data = await response.json();

    return data.data.map((driver: ApiDriver) => {
      const traces: Trace[] = driver.traces || [];
      const { activity } = calculateActivity(traces);
      const activityBreakdown = calculateActivityBreakdown(traces);

      return {
        id: driver.driverID,
        name: `${driver.forename} ${driver.surname}`,
        vehicleReg: driver.vehicleRegistration,
        traces,
        activityBreakdown,
        activity, 
      };
    });
  } catch (error) {
    console.error("Error fetching drivers:", error);
    throw new Error("Could not load drivers. Please try again later.");
  }
};

/**
 * React Query hook to fetch and cache driver data.
 */
export const useDrivers = ({ url, queryOptions }: FetchDriversOptions) => {
  return useQuery<Driver[], Error>({
    queryKey: ["drivers", url] as QueryKey,
    queryFn: () => fetchDrivers(url),
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    retry: 2, // Retry the request twice if it fails
    ...queryOptions
  });
};