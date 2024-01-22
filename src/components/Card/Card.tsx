"use client";

import styles from "./Card.module.scss";
import React from "react";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

export default Card;