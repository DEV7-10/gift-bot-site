"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const STREAK_VALUES = [10, 20, 30, 40, 50, 60, 70, 80, 90];

export function StreakBar() {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % STREAK_VALUES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const value = STREAK_VALUES[index];

  return (
    <div className="mt-6 p-4 bg-[#1C1829]/60 rounded-xl border border-white/5">
      <div className="flex justify-between text-xs text-gray-500 mb-2">
        <span>Streak Level</span>
        <span className="text-violet-400 font-semibold">{value}%</span>
      </div>
      <div className="w-full h-2 bg-[#252035] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-400"
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-600">
        <span>10%</span>
        <span>90%</span>
      </div>
    </div>
  );
}
