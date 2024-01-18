"use client";

import React from "react";
import { SearchResultsProps } from "./types";

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    if (!results) {
        return (
            <p>Results render here...</p>
        )
    }

    return (
        <div>
            <h2>Search Results for {results.steamId}</h2>
        </div>
    )
}

export default SearchResults;