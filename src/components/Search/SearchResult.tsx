"use client";

import React from "react";
import { SearchResultsProps } from "./types";
import { convertMinutes } from './../../utils/ConvertMinutes';
import GameList from './../Game/GameList';

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
            <p>Total Play Time:{convertMinutes(results.gamesOwned.total_playtime)}</p>
            <p>Most played game:</p>
            <div>
                <h3>{results.gamesOwned.games[0].name}</h3>
                <p>Time played: {convertMinutes(results.gamesOwned.games[0].playtime_forever)}</p>
            </div>
            <GameList games={results.gamesOwned.games} />
        </div>
    )
}

export default SearchResults;