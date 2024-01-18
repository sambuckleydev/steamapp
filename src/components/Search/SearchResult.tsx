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
            <h2>{results.playerSummary.personaname}</h2>
            <img src={results.playerSummary.avatarfull} width={100} height={100} />
            <p>Steam ID: {results.steamId}</p>
            <p>Total Games:{results.gamesOwned.game_count}</p>
        </div>
    )
}

export default SearchResults;