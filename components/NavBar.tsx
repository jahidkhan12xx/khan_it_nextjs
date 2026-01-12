"use client";

import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import ActionButton from "./Button";
import Image from "next/image";

const NavBar = () => {
  const navItem = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      sub: [
        { name: "Web Development", path: "/web-development" },
        { name: "App Development", path: "/app-development" },
      ],
    },
    { name: "SEO Case study", path: "/case-study" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className=" sticky top-0 z-50 container mx-auto">
      <div className="navbar lg:px-6 h-20">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52 border border-slate-100"
            >
              {navItem.map((item, idx) => (
                <li key={idx}>
                  {item.sub ? (
                    <details>
                      <summary className="text-slate-600">{item.name}</summary>
                      <ul className="p-2">
                        {item.sub.map((s, sIdx) => (
                          <li key={sIdx}>
                            <Link href={s.path}>{s.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link href={item.path} className="text-slate-600">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/"
            className="text-4xl font-black flex items-center gap-0.5 tracking-tight px-2"
          >
            <Image src={"/khan.png"} alt="khan" height={44} width={150} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {navItem.map((item, index) =>
              item.sub ? (
                <li
                  key={index}
                  className="dropdown dropdown-hover  dropdown-bottom group"
                >
                  <div
                    tabIndex={0}
                    role="button"
                    className="font-semibold text-slate-600 hover:text-blue-600 py-6 px-4 flex items-center gap-1 bg-transparent transition-colors"
                  >
                    {item.name}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </div>
                  {/* The Fix: mt-0 and pt-4 ensures the 'hover bridge' exists */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[100] menu p-2 shadow-xl bg-base-100 rounded-xl w-60 border border-slate-100 mt-0 pt-2"
                  >
                    <div className="bg-white rounded-xl overflow-hidden">
                      {item.sub.map((su, suIdx) => (
                        <li key={suIdx}>
                          <Link
                            href={su.path}
                            className="py-3 font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                          >
                            {su.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="font-semibold py-6 px-4 transition-all duration-200 text-slate-600 hover:text-blue-600 bg-transparent"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="navbar-end hidden md:flex">
          <ActionButton
            href="tel:+8801404282727"
            icon={<Phone size={18} className="fill-white" />}
          >
            +8801404282727
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
