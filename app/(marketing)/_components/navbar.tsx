"use client";

import { useScrollTop } from "@/hooks";

export default function Navbar() {
  const scrolled = useScrollTop();

  return <div>Navbar</div>;
}
