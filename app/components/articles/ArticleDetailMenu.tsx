import React from 'react';
import {
  BsBookmark,
  BsCollection
} from 'react-icons/bs';

import {
  MdContentCopy
} from 'react-icons/md';

import {
  BiShareAlt
} from 'react-icons/bi';

import { toast } from 'react-toastify';
import ToastProvider from '@/app/providers/ToastProvider';

interface ArticleDetailMenuProps {
  expanded?: boolean
}

const ArticleDetailMenu = ({
  expanded
}: ArticleDetailMenuProps) => {
  const copyLink = () => {
    
  };

  return (
    <div className='relative w-full h-full'>
      <ul className={`flex flex-row justify-center items-center`}>
        <li className={`flex flex-col items-center hover:cursor-pointer group 
        pr-4 md:pr-8
        `}>
          <div>
            <BsBookmark className={`text-white text-md md:text-xl group-hover:text-primary-200 duration-300`} />
          </div>
          <div className={`text-white py-1.5 md:py-3`}>
            Bookmark
          </div>
        </li>
        <li className={`flex flex-col items-center hover:cursor-pointer group 
        pr-4 md:pr-8
        `}>
          <div>
            <BsCollection className={`text-white text-md md:text-xl group-hover:text-primary-200 duration-300`} />
          </div>
          <div className={`text-white py-1.5 md:py-3`}>
            Tambah Koleksi
          </div>
        </li>
        <li 
          className={`flex flex-col items-center hover:cursor-pointer group`}
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast.success('Link disalin! Bagikan ke temanmu 😎');
          }}
        >
          <BiShareAlt className={`text-white text-md md:text-xl group-hover:text-primary-200 duration-300`} />
          <div className={`text-white py-1.5 md:py-3`}>
            Bagikan
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ArticleDetailMenu;