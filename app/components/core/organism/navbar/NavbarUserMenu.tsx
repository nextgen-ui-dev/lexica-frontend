'use client';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from "react-icons/io";

interface NavbarUserMenuProps {
    isOpen: boolean;
    onClick: () => void;
}

const NavbarUserMenu = ({
    isOpen,
    onClick
}: NavbarUserMenuProps) => {
    return (
        <div className='flex flex-row items-center justify-center gap-x-4'>
            <h4 className="font-base text-white font-normal text-base">User</h4>
            <div className='md:hidden' onClick={onClick}>
                {isOpen
                    ? <IoMdClose size={24} className='text-white' />
                    : <FiMenu size={24} className='text-white'/>}
            </div>
        </div>
    );
}

export default NavbarUserMenu;