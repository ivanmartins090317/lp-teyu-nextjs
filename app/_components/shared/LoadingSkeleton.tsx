import React from "react";

interface LoadingSkeletonProps {
  height?: string;
  className?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  height = "h-96",
  className = ""
}) => {
  return (
    <div
      className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-lg ${height} ${className}`}
    >
      <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
    </div>
  );
};

export default LoadingSkeleton;
