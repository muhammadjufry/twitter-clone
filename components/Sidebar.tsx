"use client";
import {
  IconHome,
  IconSearch,
  IconBell,
  IconMail,
  IconBookmark,
  IconUserCircle,
  IconDotsCircleHorizontal,
  IconAt,
  IconCash,
  IconDots,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {};

function Sidebar({}: Props) {
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isProfileMoreDropdownOpen, setIsProfileMoreDropdownOpen] =
    useState(false);

  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };
  const toggleProfileMoreDropdown = () => {
    setIsProfileMoreDropdownOpen(!isProfileMoreDropdownOpen);
  };
  return (
    <aside className="p-4 h-screen fixed flex flex-col justify-between bg-white border-r">
      <div className="flex flex-col w-fit items-center lg:items-start">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-10 h-10">
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
        <ul className="flex flex-col gap-8 mt-8 text-center justify-center items-center lg:items-start lg:text-start w-fit">
          <li>
            <Link href="/" className="flex items-center gap-4 text-lg">
              <IconHome size={32} />
              <span className="hidden lg:block">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/explore" className="flex items-center gap-4 text-lg">
              <IconSearch size={32} />
              <span className="hidden lg:block">Explore</span>
            </Link>
          </li>
          <li>
            <Link
              href="/notifications"
              className="flex items-center gap-4 text-lg"
            >
              <IconBell size={32} />
              <span className="hidden lg:block">Notifications</span>
            </Link>
          </li>
          <li>
            <Link href="/messages" className="flex items-center gap-4 text-lg">
              <IconMail size={32} />
              <span className="hidden lg:block">Messages</span>
            </Link>
          </li>
          <li>
            <Link href="/bookmarks" className="flex items-center gap-4 text-lg">
              <IconBookmark size={32} />
              <span className="hidden lg:block">Bookmarks</span>
            </Link>
          </li>
          <li>
            <Link href="/profile" className="flex items-center gap-4 text-lg">
              <IconUserCircle size={32} />
              <span className="hidden lg:block">Profile</span>
            </Link>
          </li>
          <li>
            <div
              className="flex items-center gap-4 text-lg cursor-pointer"
              onClick={toggleMoreDropdown}
            >
              <IconDotsCircleHorizontal size={32} />
              <span className="hidden lg:block">More</span>
            </div>
            {isMoreDropdownOpen && (
              <div className="p-4 mt-4 flex flex-col gap-4 rounded-md border-2 border-black w-full max-w-[230px]">
                <span className="font-bold flex items-center gap-4 text-lg cursor-pointer">
                  <IconAt size={32} /> Connect
                </span>
                <ul className="flex flex-col gap-4">
                  {/* Dropdown menu items */}
                  <li>
                    <Link href="/settings">Settings</Link>
                  </li>
                  <li>
                    <Link href="/help">Help Center</Link>
                  </li>
                  {/* Add more dropdown menu items as needed */}
                </ul>
              </div>
            )}
          </li>
          <li>
            <button className="p-4 lg:px-20 px-4 text-lg font-semibold bg-sky-500 text-white rounded-full">
              <span className="hidden lg:block">Post</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-7 h-7 lg:hidden block fill-white"
              >
                <g>
                  <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                </g>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      {isProfileMoreDropdownOpen && (
        <div className="p-4 mt-20 rounded-md border-2 border-black w-fit">
          <Link href="/logout">Logout @muhammad_jufry2</Link>
        </div>
      )}
      <div className="flex items-center gap-4">
        <Image
          src="/profile.jpg"
          width={50}
          height={50}
          alt="profile"
          className="rounded-full cursor-pointer"
          onClick={toggleProfileMoreDropdown}
        />
        <div className="flex-col hidden lg:flex">
          <span className="font-bold">Muhammad Jufry</span>
          <span className="text-slate-700">@muhammad_jufry2</span>
        </div>
        <IconDots
          size={23}
          className="cursor-pointer hidden lg:flex"
          onClick={toggleProfileMoreDropdown}
        />
      </div>
    </aside>
  );
}

export default Sidebar;
