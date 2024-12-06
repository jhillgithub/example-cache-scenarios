"use client";

import { useSearchParams } from "next/navigation";

export default function Display() {
  const searchParams = useSearchParams();

  const queryValue = searchParams.get("query") || "No query provided";

  return (
    <div>
      <h3>Query Parameter:</h3>
      <p>{queryValue}</p>
    </div>
  );
}
