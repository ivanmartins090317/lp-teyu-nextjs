import {useEffect} from "react";
import {
  preloadCriticalResources,
  setupLazyLoading,
  optimizeAnimations
} from "../_utils/performance";

export const usePerformance = () => {
  useEffect(() => {
    // Preload de recursos críticos
    preloadCriticalResources();

    // Setup lazy loading
    setupLazyLoading();

    // Otimizar animações
    optimizeAnimations();

    // Performance monitoring (opcional)
    if (typeof window !== "undefined" && "performance" in window) {
      // Log Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime);
          }
          if (entry.entryType === "first-input") {
            console.log("FID:", entry.processingStart - entry.startTime);
          }
          if (entry.entryType === "layout-shift") {
            console.log("CLS:", (entry as any).value);
          }
        }
      });

      observer.observe({
        entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"]
      });

      return () => observer.disconnect();
    }
  }, []);
};
