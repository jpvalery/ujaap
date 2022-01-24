import { useState } from "react";
import NextLink from "next/link";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 mx-auto max-w-6xl bg-white bg-opacity-90 pt-4">
      <div className="flex justify-start border-b-2 border-gray-100 py-6 text-xl font-semibold">
        <NextLink href="/">User Journey as a Product</NextLink>
        <span className="ml-2 inline-flex items-center rounded-lg bg-yellow-100 px-3 py-0 text-xs font-medium text-yellow-800">
          Beta
        </span>
      </div>
    </div>
  );
}
