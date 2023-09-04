import React from "react";
import { BsSearch } from "react-icons/bs";

interface SearchbarProps {
  controlValue: string;
  controlCallback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  large?: boolean;
  mobile?: boolean;
  placeholder?: string;
}

const Searchbar = ({
  controlValue = "",
  controlCallback,
  large,
  mobile,
  placeholder = "Cari kata kunci",
}: SearchbarProps) => {
  return (
    <div className={`relative`}>
      <BsSearch
        className={`flex items-center absolute left-0 ml-3 pointer-events-none text-gray-500 cursor-pointer ${
          large && !mobile ? "text-xl top-[12px]" : "text-md top-[7px]"
        }`}
      />

      <input
        type="search"
        value={controlValue}
        onChange={(e) => controlCallback(e)}
        placeholder={placeholder}
        className={`
        block
        rounded-xl p-3 pl-10
        border border-gray-500
        focus:ring-1 focus:ring-primary-500 focus:border-primary-500
        ${large && !mobile ? "placeholder:text-lg" : "placeholder:text-base"}
        ${
          large && mobile // Mobile
            ? "w-[50dvw] h-8"
            : !large && mobile
            ? "w-[35dvw] h-8"
            : large && !mobile // Desktop
            ? "w-[30dvw] h-12 placeholder:text-lg"
            : "w-[20dvw] h-8 placeholder:text-base"
        }
        `}
      ></input>
    </div>
  );
};

export default Searchbar;
