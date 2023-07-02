'use client';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from "react-icons/io";
import { signOut } from 'next-auth/react';
import Avatar from '../../molecules/Avatar';
import { User } from '@/app/types/session.type';
import useLoginModal from '@/app/hooks/useLoginModal';

interface NavbarUserMenuProps {
    user?: User
    isOpen: boolean;
    onClick: () => void;
}

const NavbarUserMenu = ({
    user,
    isOpen,
    onClick
}: NavbarUserMenuProps) => {
    const loginModal = useLoginModal();
    
    return (
        <div className='flex flex-row items-center justify-center gap-x-4 duration-200'>
            {user?.email ? (
                <div 
                onClick={() => signOut()}
                className='border-2 border-primary-400 rounded-full'>
                <Avatar
                    src={user?.image}
                />
                </div>
            ) : (
                <h5 
                onClick={() => loginModal.onOpen()}
                className='w-20 text-white px-4 py-1.5 text-center bg-primary-400 rounded-full cursor-pointer'>Sign In</h5>
            )}
            <div className='md:hidden' onClick={onClick}>
                {isOpen
                    ? <IoMdClose size={24} className='text-white' />
                    : <FiMenu size={24} className='text-white' />}
            </div>
        </div>
    );
}

export default NavbarUserMenu;