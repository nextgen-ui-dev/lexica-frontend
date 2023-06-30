import React from 'react';
import {
  BsBookmark,
} from 'react-icons/bs';

import {
  MdContentCopy
} from 'react-icons/md';

import {
  BiShareAlt
} from 'react-icons/bi';

interface ArticleDetailMenuProps {
  expanded?: boolean
}

const ArticleDetailMenu = ({
  expanded
}: ArticleDetailMenuProps) => {
  return (
    <div className='relative w-full h-full'>
      <ul className={`flex flex-row justify-center items-center`}>
        <li className={`flex flex-col items-center hover:cursor-pointer group 
        pr-4 md:pr-8
        `}>
          <div>
            <BsBookmark className={`text-white text-xl md:text-2xl group-hover:text-primary-200 duration-300`} />
          </div>
          <div className={`text-white py-1.5 md:py-3`}>
            Bookmark
          </div>
        </li>
        <li className={`flex flex-col items-center hover:cursor-pointer group 
        pr-4 md:pr-8
        `}>
          <div>
            <MdContentCopy className={`text-white text-xl md:text-2xl group-hover:text-primary-200 duration-300`} />
          </div>
          <div className={`text-white py-1.5 md:py-3`}>
            Salin Link
          </div>
        </li>
        <li className={`flex flex-col items-center hover:cursor-pointer group`}>
          <BiShareAlt className={`text-white text-xl md:text-2xl group-hover:text-primary-200 duration-300`} />
          <div className={`text-white py-1.5 md:py-3`}>
            Bagikan
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ArticleDetailMenu;