"use client";
import React from "react";
import { BsChevronExpand } from "react-icons/bs";

interface DifficultyDropdown {
  options: string[];
  description: string;
  expanded?: boolean;
  leftAlign?: boolean;
}

const DifficultyDropdown = ({
  options,
  description,
  expanded = false,
  leftAlign = false,
}: DifficultyDropdown) => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(options[0]);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`
    relative inline-flex flex-row items-center 
    ${leftAlign ? "justify-start" : "justify-end"}
    ${expanded ? "w-32" : "w-24"}
    border border-gray-500
    px-2 py-1
    rounded
    hover:cursor-pointer
    `}
    >
      {leftAlign ? (
        <>
          <div className="pr-1">
            <BsChevronExpand />
          </div>
          {selected}
        </>
      ) : (
        <>
          {selected}
          <div className="pl-1">
            <BsChevronExpand />
          </div>
        </>
      )}
      <div
        className={`
          absolute top-8 
          ${leftAlign ? "left-0" : "right-0"}
          box-border border border-gray-500
          rounded
          ${leftAlign ? "text-left" : "text-right"}
          bg-gray-100
          duration-200
          overflow-hidden
          ${!open && "hidden"}
          `}
      >
        {options.map((value, index) => {
          return (
            <div
              key={index}
              onClick={() => setSelected(value)}
              className={`
                ${leftAlign && expanded && "pr-14"}
                ${leftAlign && !expanded && "pr-8"}
                ${!leftAlign && expanded && "pl-14"}
                ${!leftAlign && !expanded && "pl-8"}
                hover:bg-primary-500
                hover:text-white
                hover:font-semibold
                `}
            >
              <div
                key={index}
                className={`
                  ${leftAlign ? "pl-2" : "pr-2"} 
                  py-[2.05px] text-sm
                  truncate
                  `}
              >
                {value} {description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DifficultyDropdown;
