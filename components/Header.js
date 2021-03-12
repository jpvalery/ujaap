import { useState } from "react";
import NextLink from "next/link";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 max-w-6xl pt-4 mx-auto bg-white bg-opacity-90">
      <div className="flex justify-start py-6 text-xl font-semibold border-b-2 border-gray-100">
        <NextLink href="/">User Journey as a Product</NextLink>
        <span className="inline-flex items-center px-3 py-0 ml-2 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-lg">
          Beta
        </span>
      </div>
    </div>
  );
}
