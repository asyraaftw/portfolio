"use client";

import React from "react";

interface CustomContent {
  itemsCustom?: React.ReactNode[]; // An array of React nodes to allow multiple components
}

export default function CustomContainer2(props: CustomContent) {
  const { itemsCustom = [] } = props; // Default to empty array if no items are passed

  // Determine grid columns based on number of items
  const gridColumns = itemsCustom?.length <= 2 ? "grid-cols-2" : "grid-cols-3"; // Example: 3 columns for more than 2 items

  return (
    <div className={`mt-6 grid gap-4 sm:grid-cols-2 lg:${gridColumns}`}>
      {itemsCustom?.map((x, i) => (
        <div
          key={i}
          className="rounded-lg bg-gray-800 p-4 text-red-600 shadow-sm"
        >
          {x}
        </div>
      ))}
    </div>
  );
}
