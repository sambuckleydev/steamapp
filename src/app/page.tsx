"use client";
// In this application I've opted not to use server-side rendering for simplicity of development
// in a production environment it would be better to SSR the home/landing page and then hydrate any dynamic data if required.
// There is a node module available for interacting with the Steam API https://www.npmjs.com/package/steamapi
// However for this example I'll be writing my own API implementation.

import styles from "./page.module.scss";
import React, {useState} from "react";
import Search from "@/components/Search/Search";
import SearchResults from "@/components/Search/SearchResult";
import { SearchResultData } from "@/components/Search/types";

export default function Home() {
  const [searchResults, setSearchResults] = useState<SearchResultData[] | any>(null);

  const handleSearch = async (query: string) => {
    console.log("Searching for:", query);

    // For this example I have not included any CORS/Headers configuration to secure the API
    // Something such as the cors module would be appropriate for a Nextjs backend https://www.npmjs.com/package/cors
    try {
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
    }
  };

  return (
    <main className={styles.main}>
      <Search onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </main>
  );
}
