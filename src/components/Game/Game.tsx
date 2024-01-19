"use client";

import styles from "./Game.module.scss";
import React from "react";
import { GameProps } from "./types";

const Game: React.FC<GameProps> = ({ game }) => {
    return (
        <div className={styles.game}>
            <h4 className={styles.label}>{game.name}</h4>
            <p className={styles.values}>Played Time: {`${Math.floor(game.playtime_forever / 60).toLocaleString()} hours`}</p>
        </div>
    )
}

export default Game;