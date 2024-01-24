"use client";

import styles from "./Game.module.scss";
import React from "react";
import { GameProps } from "./types";

const Game: React.FC<GameProps> = ({ game }) => {
  return (
    <div className={styles.game}>
      <p>{game.name}</p>
      <p className="centered-text">{`${Math.floor(
        game.playtime_forever / 60
      ).toLocaleString()}h`}</p>
    </div>
  );
};

export default Game;
