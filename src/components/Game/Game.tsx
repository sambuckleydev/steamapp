"use client";

import React from "react";
import { GameProps } from "./types";
import { convertMinutes } from './../../utils/ConvertMinutes';

const Game: React.FC<GameProps> = ({ game }) => {
    return (
        <div>
            <h4>{game.name}</h4>
            <p>Played Time: {convertMinutes(game.playtime_forever)}</p>
        </div>
    )
}

export default Game;