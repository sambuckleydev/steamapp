"use client";

import React from "react";
import styles from "./Loading.module.scss";
import { LoadingProps } from "./types";

const Loading: React.FC<LoadingProps> = ({ className }) => {
  const loadingContainerClassNames = className
    ? `${styles.loadingContainer} ${className}`
    : styles.loadingContainer;

  return (
    <div className={loadingContainerClassNames} role="alert" aria-busy="true">
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
