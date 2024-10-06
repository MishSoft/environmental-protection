import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

// Define the interface/type for LinkProps
interface DropItem {
  name: string;
  link: string;
}

interface LinksProps {
  name: string;
  link: string;
  drop?: DropItem[]; // drop contains an array of DropItem objects
}

// Properly typed links array
const links: LinksProps[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Topics ▼",
    link: "/",
    drop: [
      {
        name: "Why Protect the Environment?",
        link: "/",
      },
      {
        name: "Climate Change",
        link: "/",
      },
      {
        name: "Sustainable Living",
        link: "/",
      },
      {
        name: "Global Impact",
        link: "/",
      },
    ],
  },
  {
    name: "Resources ▼",
    link: "/",
    drop: [
      {
        name: "Articles",
        link: "/",
      },
      {
        name: "Videos",
        link: "/",
      },
      {
        name: "Tools",
        link: "/",
      },
      {
        name: "Guides",
        link: "/",
      },
    ],
  },
  {
    name: "Get Involved",
    link: "/",
  },
];

export default function Nav() {
  return (
    <nav className="p-2 flex items-center gap-5">
      <a
        href="#"
        className="pl-2 pr-2 pt-1 pb-1 text-green-500 rounded-md border-2 border-green-400"
      >
        Home
      </a>
      <div className="cursor-pointer pl-2 pr-2 pt-1 pb-1 flex text-green-500 rounded-md border-2 border-green-400 items-center gap-2">
        Topics
        <FaAngleDown />
        <div className="absolute p-2 top-[130%] flex flex-col gap-5 w-[200px] border-2 border-green-400  rounded-md">
          <a
            href="#"
            className="hover:bg-green-400 hover:text-white p-2 rounded-md"
          >
            Why Protect the Environment?
          </a>
          <a
            href="#"
            className="hover:bg-green-400 hover:text-white p-2 rounded-md"
          >
            Climate Change
          </a>
          <a
            href="#"
            className="hover:bg-green-400 hover:text-white p-2 rounded-md"
          >
            Sustainable Living
          </a>
          <a
            href="#"
            className="hover:bg-green-400 hover:text-white p-2 rounded-md"
          >
            Sustainable Living
          </a>
        </div>
      </div>

      <div className="relative cursor-pointer pl-2 pr-2 pt-1 pb-1 flex text-green-500 rounded-md border-2 border-green-400 items-center gap-2">
        Resources
        <FaAngleDown />
        <div className="absolute p-2 top-[130%] flex flex-col gap-5 w-[200px] border-2 border-green-400 right-[1px] rounded-md">
          <a
            href="#"
            className="hover:bg-green-400 hover:text-white p-2 rounded-md"
          >
            Articles
          </a>
          <a
            href="#"
            className="hover:bg-green-400 hover:text-white p-2 rounded-md"
          >
            Videos
          </a>
          <a
            href="#"
            className="hover:bg-green-400 hover:text-white p-2 rounded-md"
          >
            Tools
          </a>
          <a
            href="#"
            className="hover:bg-green-400 hover:text-white p-2 rounded-md"
          >
            Guides
          </a>
        </div>
      </div>

      <a
        href="#"
        className="pl-2 pr-2 pt-1 pb-1 text-green-500 rounded-md border-2 border-green-400"
      >
        Get Involved
      </a>
    </nav>
  );
}
