'use client';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from "react-icons/io";
import { signIn } from 'next-auth/react';
import Avatar from '../../molecules/Avatar';
import { User } from '@/app/types/session.type';

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
    return (
        <div className='flex flex-row items-center justify-center gap-x-4 duration-200'>
            {user?.email ? (
                <div className='border-2 border-primary-400 rounded-full'>
                <Avatar
                    src={user?.image}
                />
                </div>
            ) : (
                <h5 
                onClick={() => signIn('google')}
                className='text-white bg-primary-400 py-1 px-4 rounded-full cursor-pointer'>Login</h5>
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