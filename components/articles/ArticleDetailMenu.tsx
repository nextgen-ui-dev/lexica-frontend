"use client";

import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { BsBookmark, BsBookmarkFill, BsCollection } from "react-icons/bs";

import { BiShareAlt } from "react-icons/bi";

import { MdContentCopy } from "react-icons/md";

import { toast } from "react-toastify";

import useBookmarks from "@/hooks/useBookmarks";
import { useArticle } from "@/hooks/useArticle";
import { useSession } from "next-auth/react";

import MultipleDropdownSelect from "../core/molecules/MultipleDropdownSelect";
import useCollections from "@/hooks/useCollections";

interface ArticleDetailMenuProps {
  id: string;
}

interface DropdownSelectData {
  value: string;
  label: string;
}

const ArticleDetailMenu = ({ id }: ArticleDetailMenuProps) => {
  const { data: session, status } = useSession();
  const { data: article } = useArticle(id);
  const bookmarksState = useBookmarks((state) => state.bookmarks);
  const bookmarks = useBookmarks();
  const [bookmarked, setBookmarked] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);

  const collectionsState = useCollections((state) => state.collections);
  const collections = useCollections();
  const dropdownData: DropdownSelectData[] = collectionsState.map((col) => {
    return {
      value: col.id,
      label: col.name,
    };
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleBookmark = React.useCallback(() => {
    // Guard clause for non-logged in user
    console.log("status", status);
    console.log("user", session?.user);
    if (session?.user === undefined) {
      return toast.error("Coba login terlebih dahulu");
    }

    if (bookmarks.isBookmarked(id)) {
      bookmarks.removeBookmark(id);
      setBookmarked(false);
      toast.success("Artikel dihapus dari Bookmark");
    } else {
      console.log("article", article);
      if (article) {
        bookmarks.addBookmark(article);
        setBookmarked(true);
        toast.success("Artikel tersimpan di Bookmark");
      }
    }
  }, [bookmarksState]);

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
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
            {bookmarked ? (
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
            {bookmarked ? "Hapus" : "Simpan"}
          </div>
        </li>
        <div className="relative">
          <li
            className={`flex flex-col items-center hover:cursor-pointer group 
          pr-4 md:pr-8 min-w-max
          `}
            onClick={() => {
              if (showDropdown) {
                setShowDropdown(false);
                // @Jere TODO for each selected dropdown, add to collection
                // collections.addArticleToCollection(id, dropdownData);
              } else {
                setShowDropdown(true);
              }
            }}
          >
            <div>
              <BsCollection
                className={`text-white text-md md:text-xl group-hover:text-primary-200 duration-300`}
              />
            </div>
            <div className={`text-white py-1.5 md:py-3`}>
              {showDropdown ? "Simpan Pilihan" : "Tambah Koleksi"}
            </div>
          </li>
          {showDropdown && (
            <div
              className={`absolute z-10 top-14 left-1/2 -translate-x-1/2 w-[70dvw]`}
            >
              <MultipleDropdownSelect
                placholder="Koleksi"
                onChange={(value) => {
                  setCustomValue("topic", value);
                }}
                options={dropdownData}
                small
              />
            </div>
          )}
        </div>

        <li
          className={`flex flex-col items-center hover:cursor-pointer group`}
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast.success("Link disalin! Bagikan ke temanmu 😎");
          }}
        >
          <MdContentCopy
            className={`text-white text-md md:text-xl group-hover:text-primary-200 duration-300`}
          />
          <div className={`text-white py-1.5 md:py-3`}>Bagikan</div>
        </li>
      </ul>
    </div>
  );
};

export default ArticleDetailMenu;
