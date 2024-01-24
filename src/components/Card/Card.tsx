"use client";

import styles from "./Card.module.scss";
import React from "react";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children, style, className }) => {
  const classNames = className ? className : "";

  return (
    <div className={`${styles.card} ${classNames}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
