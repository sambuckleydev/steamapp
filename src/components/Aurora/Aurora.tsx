"use client";

import styles from "./Aurora.module.scss";
import React from "react";

const Aurora: React.FC = ({}) => {
  return (
    <div className={styles.auroraContainer}>
      <div className={styles.auroraShape1}></div>
      <div className={styles.auroraShape2}></div>
      <div className={styles.auroraShape3}></div>
      <div className={styles.auroraBlur}></div>
    </div>
  );
};

export default Aurora;
