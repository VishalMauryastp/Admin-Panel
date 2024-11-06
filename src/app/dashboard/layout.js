"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Layout = ({ children }) => {
  // Sidebar items with sub-items
  const sidebarItems = [
    {
      icon: "home",
      title: "Dashboard",
      slug: "/dashboard",
    },
    {
      icon: "user",
      title: "Profile",
      slug: "/profile",
    },
    {
      icon: "settings",
      title: "Settings",
      slug: "/settings",
      subItems: [
        {
          title: "Users",
          slug: "/settings/users",
          icon: "users",
        },
        {
          title: "Roles",
          slug: "/settings/roles",
          icon: "shield-alt",
        },
      ],
    },
    {
      icon: "calendar",
      title: "Events",
      slug: "/events",
      subItems: [
        {
          title: "Users",
          slug: "/settings/users",
          icon: "users",
        },
        {
          title: "Roles",
          slug: "/settings/roles",
          icon: "shield-alt",
        },
      ],
    },
    {
      icon: "message",
      title: "Messages",
      slug: "/messages",
    },
    {
      icon: "logout",
      title: "Logout",
      slug: "/logout",
    },
  ];

  // State for open dropdown and sidebar
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(
    window.innerWidth <= 768 ? false : true
  );

  // Toggle dropdown function
  const toggleDropdown = (slug) => {
    setOpenDropdown((prev) => (prev === slug ? null : slug));
  };

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };



  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          href="#"
          className="flex items-center pb-4 border-b border-b-gray-800"
        >
          <h2 className="font-bold text-2xl">
            LOREM{" "}
            <span className="bg-[#f84525] text-white px-2 rounded-md">
              IPSUM
            </span>
          </h2>
        </Link>

        {/* Sidebar Links */}
        <div className="pt-8">
          <ul>
            {sidebarItems.map((item) => (
              <li key={item.slug}>
                <Link href={item.slug} className="flex items-center px-4 py-2.5 rounded hover:text-white hover:bg-[#000]">
                 
                    <div
                      className="flex items-center w-full"
                      onClick={
                        item.subItems
                          ? (e) => {
                              e.preventDefault();
                              toggleDropdown(item.slug);
                            }
                          : null
                      }
                    >
                      <span
                        className={`icon-${item.icon}`}
                        style={{ marginRight: "10px" }}
                      ></span>
                      <h5>{item.title}</h5>
                    </div>
                  
                </Link>

                {/* Dropdown for items with subItems */}
                {item.subItems && openDropdown === item.slug && (
                  <ol className="">
                    {item.subItems.map((subItem) => (
                      <li
                        key={subItem.slug}
                        className="px-4 py-2.5 rounded hover:text-white hover:bg-[#000000bd]"
                      >
                        <Link href={subItem.slug}>
                          <div>
                            <span
                              className={`icon-${subItem.icon}`}
                              style={{ marginRight: "10px" }}
                            ></span>
                            {subItem.title}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      <div
        onClick={() => {
          setSidebarOpen(false);
        }}
        className={`fixed top-0 left-0 w-full h-full bg-black/50 md:hidden sidebar-overlay ${
          isSidebarOpen ? "z-40" : "z-[-10] opacity-0"
        }`}
      ></div>

      {/* Main Content */}
      <main
        className={`w-full bg-gray-200 min-h-screen transition-all main ${
          isSidebarOpen
            ? "md:w-[calc(100%-256px)] md:ml-64"
            : "md:w-full md:ml-0"
        }`}
      >
        <div className="py-2 px-6 bg-[#f8f4f3] flex justify-between items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
          <button
            type="button"
            className="text-lg text-gray-900 font-bold sidebar-toggle"
            onClick={toggleSidebar}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button type="button" className="dropdown-toggle flex items-center">
            <div className="flex-shrink-0 w-10 h-10 relative">
              <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                  alt=""
                />
                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
              </div>
            </div>
            <div className="p-2 md:block text-left">
              <h2 className="text-sm font-semibold text-gray-800">John Doe</h2>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </button>
        </div>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
