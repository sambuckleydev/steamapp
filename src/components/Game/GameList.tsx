"use client";

import styles from "./Game.module.scss";
import React from "react";
import Game from "./Game";
import { GameListProps } from "./types";
import Card from "../Card/Card";

const GameList: React.FC<GameListProps> = ({ games }) => {
    if (!games) {
        return (
            <p>No Games to render...</p>
        )
    }

    return (
        <>
            <Card className={styles.gameList}>
                <header>
                    <h3>Games Owned</h3>
                    <h3 className="centered-text">Played Time</h3>
                </header>
                <div>
                    {games.slice(1).map((game: any, index: number) => (
                        <Game key={game.appid} game={game} />
                    ))}
                </div>
            </Card>
        </>
    )
}

export default GameList;