// RobotWrapper.jsx
"use client";
import dynamic from "next/dynamic";

const RobotDQHQ = dynamic(() => import("./RobotDQHQ"), { ssr: false });

export default function RobotWrapper() {
  return <RobotDQHQ />;
}
