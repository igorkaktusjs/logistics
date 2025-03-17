import { useMemo, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import { SearchInputProps } from "../../types/ui";

/**
 * Search input component with debounced search handling.
 * - Controlled input to persist value across page changes.
 * - Prevents excessive API calls by debouncing input.
 */
const SearchInput = ({ 
  value, 
  setValue, 
  onSearch, 
  placeholder = "Search...", 
  className = "", 
  debounceTime = 300 
}: SearchInputProps) => {
  // Memoized debounce function to prevent recreation on every render
  const debouncedSearch = useMemo(
    () => debounce((query: string) => onSearch(query), debounceTime),
    [onSearch, debounceTime]
  );

  // Cleanup debounce function on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  // Handles input changes and triggers debounced search
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
  }, [debouncedSearch, setValue]);

  return (
    <div className={`w-1/4 ${className}`}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full p-3 border border-red-500 border-[0.4px] rounded-lg bg-white shadow-lg 
                   text-md font-medium text-gray-700 transition-all duration-300 focus:outline-none 
                   focus:ring-1 focus:ring-red-500 focus:border-red-500 hover:bg-gray-100"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
