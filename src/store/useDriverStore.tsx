import { create } from "zustand";
import { Driver } from "../types";
import { persist } from "zustand/middleware"; 

/**
 * Zustand store for managing drivers and search query.
 */
type DriverStore = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  drivers: Driver[];
  setDrivers: (drivers: Driver[]) => void;
  fetchDrivers: () => Promise<void>; 
};

export const useDriverStore = create<DriverStore>()(
  persist(
    (set) => ({
      searchQuery: "",
      setSearchQuery: (query) => set({ searchQuery: query }),
      drivers: [],
      setDrivers: (drivers) => set({ drivers }),
      fetchDrivers: async () => {
        try {
          const response = await fetch("/drivers.json");
          if (!response.ok) throw new Error("Failed to fetch drivers");

          const data = await response.json();
          set({ drivers: data.data }); 
        } catch (error) {
          console.error("Error fetching drivers:", error);
        }
      },
    }),
    { name: "driver-storage" } 
  )
);
