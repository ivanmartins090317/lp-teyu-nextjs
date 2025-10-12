"use client";

import React from "react";
import {usePerformance} from "../../_hooks/usePerformance";

interface PerformanceProviderProps {
  children: React.ReactNode;
}

const PerformanceProvider: React.FC<PerformanceProviderProps> = ({children}) => {
  usePerformance();

  return <>{children}</>;
};

export default PerformanceProvider;
