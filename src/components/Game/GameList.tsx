"use client";

import React from "react";
import Game from "./Game";
import { GameListProps } from "./types";

const GameList: React.FC<GameListProps> = ({ games }) => {
    if (!games) {
        return (
            <p>No Games to render...</p>
        )
    }

    return (
        <div>
            <h2>Game List</h2>
                {games.slice(1).map((game: any, index: number) => (
                    <Game key={game.appid} game={game} />
                ))}
        </div>
    )
}

export default GameList;