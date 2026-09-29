"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "y8dnjk5qtq";

// Load analytics after the page is idle so it never competes with first paint / LCP.
export default function ClarityInit() {
  useEffect(() => {
    const start = () => Clarity.init(CLARITY_PROJECT_ID);
    const schedule = () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(start, { timeout: 4000 });
      } else {
        setTimeout(start, 2000);
      }
    };

    if (document.readyState === "complete") {
      schedule();
      return;
    }
    window.addEventListener("load", schedule, { once: true });
    return () => window.removeEventListener("load", schedule);
  }, []);

  return null;
}
