// Loading.tsx

import React from "react";
import styles from "@styles/loading.module.css";
import NotFound from "@components/NotFound";
import { notFound } from "next/navigation";

const LoadingComponent = () => {
  return (
    <div className={styles.loading_container}>
      <div className={styles.loading_spinner}></div>
      <p className={styles.loading_text}>Loading...</p>
    </div>
  );
};

export default LoadingComponent;
