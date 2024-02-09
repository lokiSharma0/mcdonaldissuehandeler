"use client";
import Link from "next/link";
import React from "react";
import { SiMcdonalds } from "react-icons/si";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const currentpath = usePathname();
  const links = [
    { lable: "Dashboard", href: "/pages/dashboard" },
    { lable: "Issues", href: "/pages/issue" },
  ];
  return (
    <nav>
      <div className="">
        <Link href="/">
          <SiMcdonalds size={40} color="#F0E68C" />
        </Link>
      </div>
      <ul className="flex flex-row space-x-20  ">
        {links.map(({ lable, href }) => {
          return (
            <li
              className={`${
                href === currentpath ? "text-zinc-900" : "text-zinc-400"
              } hover:text-zinc-900`}
              key={href}
            >
              <Link href={href}>{lable}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
