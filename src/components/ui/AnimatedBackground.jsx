"use client";
import React from "react";
import styles from "./animatedBackground.module.css";

const NUM_PILLS = 30; // Số lượng viên thuốc

export default function AnimatedBackground() {
  const pills = Array.from({ length: NUM_PILLS });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {pills.map((_, i) => (
        <img
          key={i}
          src="/images/Pill-01.png"
          className={`${styles.pill} ${styles[`pill${i}`]}`}
          alt="pill"
        />
      ))}
    </div>
  );
}
