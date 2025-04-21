// Loading.tsx

import React from "react";

const LoadingComponent = () => {
  return (
    <div
      // className={styles.loading_container}
      className="flex h-[100vh] flex-col items-center justify-center"
    >
      <div className="h-12 w-12 animate-spin divide-solid rounded-full border-4 border-l-light-gray"></div>
      <p className="mt-5 text-body">Loading...</p>
    </div>
  );
};

export default LoadingComponent;
