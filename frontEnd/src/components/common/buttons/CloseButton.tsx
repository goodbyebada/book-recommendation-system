// CloseButton.tsx
import React from "react";

interface CloseButtonProps {
  onClick: () => void;
}

/**
 * X버튼
 * @param param0
 * @returns
 */
function CloseButton({ onClick }: CloseButtonProps) {
  return (
    // bootstrap
    <button
      type="button"
      className="btn-close p-4"
      aria-label="Close"
      onClick={onClick}
    ></button>
  );
}

export default CloseButton;
