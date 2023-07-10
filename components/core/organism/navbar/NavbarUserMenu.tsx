"use client";

import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { BiLogIn } from 'react-icons/bi';
import Avatar from '../../molecules/Avatar';
import { User } from '@/types/session.type';
import useLoginModal from '@/hooks/useLoginModal';
import ProfileDropdown from './ProfileDropdown';

interface NavbarUserMenuProps {
  user?: User;
  isOpen: boolean;
  isScroll?: boolean;
  onClick: () => void;
}

const NavbarUserMenu = ({
  user,
  isOpen,
  isScroll,
  onClick,
}: NavbarUserMenuProps) => {
  const loginModal = useLoginModal();
  const [expandProfile, setExpandProfile] = React.useState(false);

  const toggleExpand = () => {
    setExpandProfile(!expandProfile);
  };

  React.useEffect(() => {
    expandProfile && setExpandProfile(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScroll]);

  return (
    <div className="flex flex-row items-center justify-center gap-x-4 duration-200 hover:cursor-default">
      {user?.email ? (
        // When user is logged in
        <div className={`relative border-2 border-primary-400 rounded-full`}>
          <div
            className="hover:cursor-pointer"
            onClick={() => setExpandProfile(!expandProfile)}
          >
            <Avatar
              src={user?.image}
              large={window.innerWidth > 768 ? true : false}
            />
          </div>

          {expandProfile && (
            <ProfileDropdown user={user} toggleExpand={toggleExpand} />
          )}
        </div>
      ) : (
        <h5
          onClick={() => loginModal.onOpen()}
          className="flex flex-row w-22 text-white px-4 py-1.5 text-center bg-primary-400 rounded-full cursor-pointer"
        >
          <BiLogIn className="w-4 h-4 mr-[4px] mt-[1px]" />
          Masuk
        </h5>
      )}
      <div className="md:hidden" onClick={onClick}>
        {isOpen ? (
          <IoMdClose size={24} className="text-white" />
        ) : (
          <FiMenu size={24} className="text-white" />
        )}
      </div>
    </div>
  );
};

export default NavbarUserMenu;
