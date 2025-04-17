"use client";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";

const MobileTopbar = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-100 py-2 gap-2 sm:gap-4">
        <Link href="/trackorder" className="whitespace-nowrap">
          Acompanhar Encomenda
        </Link>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline whitespace-nowrap">EUR</span>
        <span className="hidden sm:inline">|</span>

        {/* Language Selector (on hover) */}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-1">
            <div className="w-5 h-4 bg-gray-200" />
            <span>Português</span>
            <MdKeyboardArrowDown size={16} />
          </div>

          {/* Language Dropdown */}
          <ul className="absolute top-5 right-0 bg-[var(--White)] text-black shadow-lg rounded w-40 p-2 hidden group-hover:block z-50">
            <li className="hover:bg-[var(--lightGray)] px-3 py-1 cursor-pointer flex items-center gap-2">
              <div className="w-5 h-4 bg-gray-200" />
              Português
            </li>
            <li className="hover:bg-[var(--lightGray)] px-3 py-1 cursor-pointer flex items-center gap-2">
              <div className="w-5 h-4 bg-gray-200" />
              English
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[var(--primary)] text-white">
        <div className="Container border-b-[0.5px] border-[var(--darkGray)] py-3 flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/">
            <div className="w-40 h-10 bg-gray-200" />
          </Link>
          {/* Right: Icons */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/checkout">
              <IconWithBadge
                icon={<HiOutlineShoppingBag size={25} />}
                count={0}
              />
            </Link>
            <Link href="/account">
              <FaRegUser size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTopbar;

function IconWithBadge({ icon, count }) {
  return (
    <div className="relative cursor-pointer">
      {icon}
      <span className="absolute -bottom-1 -right-2 bg-[var(--White)] text-[var(--primary)] text-xs font-bold h-4 w-4 flex items-center justify-center rounded-full">
        {count}
      </span>
    </div>
  );
}
