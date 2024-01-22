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
            <div className="grid-container grid-2-1-1">
                <Card>
                    <div>                
                        <img src={results.playerSummary.avatarfull} width={100} height={100} />
                    </div>
                    <div>
                        <h2>{results.playerSummary.personaname}</h2>
                        <p>Steam ID: {results.steamId}</p>
                    </div>
                </Card>
                
                <Card className="centered-text">
                    <h3>Games Owned</h3>  
                    <p className="large-text">{results.gamesOwned.game_count}</p>
                </Card>
                
                <Card className="centered-text">
                    <h3>Total Play Time</h3>
                    <p className="large-text">{`${Math.floor(results.gamesOwned.total_playtime / 60).toLocaleString()}h`}</p>
                </Card>
            </div>

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