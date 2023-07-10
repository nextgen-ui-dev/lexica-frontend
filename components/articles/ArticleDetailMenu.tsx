import React from "react";
import { BsBookmark, BsBookmarkFill, BsCollection } from "react-icons/bs";

import { BiShareAlt } from "react-icons/bi";

import { toast } from "react-toastify";

// import getCurrentUser from '@/app/actions/getCurrentUser';
import useBookmarkArticles from "@/hooks/useBookmarkArticles";

interface ArticleDetailMenuProps {
  id: number;
}

const ArticleDetailMenu = ({ id }: ArticleDetailMenuProps) => {
  // const session = await getCurrentUser();
  const bookmarks = useBookmarkArticles();

  const handleBookmark = () => {
    // Guard clause for non-logged in user
    // if (!session.user) {
    //   return toast.error('Kamu harus login terlebih dahulu');
    // }

    if (bookmarks.isBookmarked(id)) {
      bookmarks.removeBookmark(id);
      toast.success("Artikel dihapus dari Bookmark");
    } else {
      bookmarks.addBookmark(id);
      toast.success("Artikel tersimpan di Bookmark");
    }
  };

  return (
    <div className="relative w-full h-full">
      <ul className={`flex flex-row justify-center items-center`}>
        <li
          className={`flex flex-col items-center hover:cursor-pointer group 
        pr-4 md:pr-8
        `}
        >
          <div onClick={() => handleBookmark()}>
            {bookmarks.isBookmarked(id) ? (
              <BsBookmarkFill
                className={`text-white text-md md:text-xl group-hover:text-primary-200 duration-300`}
              />
            ) : (
              <BsBookmark
                className={`text-white text-md md:text-xl group-hover:text-primary-200 duration-300`}
              />
            )}
          </div>
          <div className={`text-white py-1.5 md:py-3`}>
            {bookmarks.isBookmarked(id) ? "Hapus" : "Simpan"}
          </div>
        </li>
        <li
          className={`flex flex-col items-center hover:cursor-pointer group 
        pr-4 md:pr-8
        `}
        >
          <div>
            <BsCollection
              className={`text-white text-md md:text-xl group-hover:text-primary-200 duration-300`}
            />
          </div>
          <div className={`text-white py-1.5 md:py-3`}>Tambah Koleksi</div>
        </li>
        <li
          className={`flex flex-col items-center hover:cursor-pointer group`}
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast.success("Link disalin! Bagikan ke temanmu 😎");
          }}
        >
          <BiShareAlt
            className={`text-white text-md md:text-xl group-hover:text-primary-200 duration-300`}
          />
          <div className={`text-white py-1.5 md:py-3`}>Bagikan</div>
        </li>
      </ul>
    </div>
  );
};

export default ArticleDetailMenu;
