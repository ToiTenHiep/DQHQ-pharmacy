// NavbarWrapper.jsx
"use client";
import dynamic from "next/dynamic";

// dynamic import the actual navbar component (no SSR)
const Navbar = dynamic(() => import("./navbar"), { ssr: false });

// Export a default client component wrapper that returns the dynamic Navbar
export default function NavbarWrapper() {
  return <Navbar />;
}
