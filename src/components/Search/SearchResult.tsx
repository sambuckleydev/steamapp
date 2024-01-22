"use client";

import React from "react";
import { SearchResultsProps } from "./types";
import { convertMinutes } from './../../utils/ConvertMinutes';
import GameList from './../Game/GameList';
import Card from "../Card/Card";

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    if (!results) {
        return (
            <p>Results render here...</p>
        )
    }

    return (
        <>
            <Card>
                <div>                
                    <img src={results.playerSummary.avatarfull} width={100} height={100} />
                </div>
                <div>
                    <h2>{results.playerSummary.personaname}</h2>
                    <p>Steam ID: {results.steamId}</p>
                </div>
            </Card>
            
            <Card>
                <h3>Games Owned</h3>  
                <p>{results.gamesOwned.game_count}</p>
            </Card>
            
            <Card>
                <h3>Total Play Time</h3>  
                <p>{convertMinutes(results.gamesOwned.total_playtime)}</p>
            </Card>

            <Card>
                <div>
                    <h3>Most Played Game</h3>
                    <p>{results.gamesOwned.games[0].name}</p>
                </div>

                <div>
                    <h3>Played Time</h3>
                    <p>{convertMinutes(results.gamesOwned.games[0].playtime_forever)}</p>
                </div>
            </Card>

            <GameList games={results.gamesOwned.games} />
        </>
    )
}

export default SearchResults;