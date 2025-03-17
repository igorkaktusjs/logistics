/**
 * Represents the properties for the SearchInput component.
 */
export interface SearchInputProps {
  value: string; // Current value of the search input (controlled component)
  setValue: (value: string) => void; // Function to update the input value
  onSearch: (query: string) => void; // Function triggered when the search query changes (debounced)
  placeholder?: string; // Placeholder text for the input field (optional, defaults to "Search...")
  className?: string; // Additional CSS classes for styling (optional)
  debounceTime?: number; // Debounce delay time in milliseconds (optional, defaults to 300ms)
}

