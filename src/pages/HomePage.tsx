import { useEffect } from "react";
import { useDrivers } from "../hooks/useDrivers";
import { useDriverStore } from "../store/useDriverStore";
import SearchInput from "../components/ui/SearchInput";
import DriverTable from "../components/DriverTable";

const HomePage = () => {
  const { data: drivers, isLoading, error } = useDrivers();
  const { searchQuery, setSearchQuery, setDrivers } = useDriverStore();

  // Store the initial drivers when they are first loaded
  useEffect(() => {
    if (drivers) {
      setDrivers(drivers);
    }
  }, [drivers, setDrivers]);

  /**
   * Filters drivers based on the search query.
   * Matches either the driver's name or vehicle registration.
   */
  const filteredDrivers = drivers?.filter((driver) =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.vehicleReg.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 w-full max-w-full ">
      <div className="container">
        {/* Search input field for filtering drivers */}
        <div className="w-full max-w-md min-w-[100px]">
          <SearchInput 
            value={searchQuery} 
            setValue={setSearchQuery} 
            onSearch={setSearchQuery} 
            placeholder="Search for a driver..." 
            className="mb-4 w-full"
            debounceTime={400}
          />
        </div>

        {/* Handling loading and error states */}
        <div className="mt-4 min-h-[200px] flex items-center justify-center w-full">
          {isLoading ? (
            <p className="text-gray-500 text-lg mt-4 text-center animate-pulse">
              Loading...
            </p>
          ) : error ? (
            <p className="text-red-500 text-lg mt-4 text-center">
              Error loading drivers. Please try again.
            </p>
          ) : filteredDrivers?.length === 0 ? (
            <p className="text-gray-500 text-lg mt-4 text-center opacity-100 animate-fadeIn">
              No matching drivers found.
            </p>
          ) : (
            <div className="w-full opacity-100 animate-fadeIn">
              <DriverTable drivers={filteredDrivers || []} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
