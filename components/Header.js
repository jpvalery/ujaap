import { useState } from "react";
import NextLink from "next/link";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <div className="max-w-6xl mx-auto sticky top-0 z-50 pt-4 bg-white bg-opacity-90">
      <div className="flex justify-start border-b-2 border-gray-100 py-6 text-xl font-semibold">
        <NextLink href="/">User Journey as a Product</NextLink>
        <span className="ml-2 inline-flex items-center px-3 py-0 rounded-lg text-xs font-medium bg-yellow-100 text-yellow-800">
          Beta
        </span>
      </div>
    </div>
  );
}
