"use client";

import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { SearchResultData } from "@/components/Search/types";
import { useLoading } from "@/context/loadingContext";

const Search: React.FC = () => {
  const { isLoading, setLoading } = useLoading();
  const [searchResults, setSearchResults] = useState<SearchResultData[] | any>(
    null
  );

  const handleSearch = async (query: string) => {
    console.log("Searching for:", query);

    // For this example I have not included any CORS/Headers configuration to secure the API
    // Something such as the cors module would be appropriate for a Nextjs backend https://www.npmjs.com/package/cors
    try {
      setLoading(true);
      const apiUrl = `/api/user/${query}`;
      const response = await fetch(apiUrl);

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Parse the JSON response
      const userData = await response.json();

      // Handle the data (e.g., set state, display to user)
      console.log("User data:", userData);
      setSearchResults(userData);
    } catch (error) {
      // Handle any errors
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </>
  );
};

export default Search;
