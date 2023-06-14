'use client';
import { usePathname } from 'next/navigation';

interface NavbarMenuItemsProps {
    isOpen: boolean;
}

const NavbarMenuItems = ({
    isOpen
}:NavbarMenuItemsProps) => {
    const pathName = usePathname();

    return (
        <div className={`fixed md:static w-full min-h-[28vh] md:min-h-fit md:bg-transparent left-0 ${isOpen ? 'top-14 bg-primary-600 border-b border-primary-500' : '-top-96'} w-full`}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
                <h5 className={`${pathName === '/' ? 'text-white' : 'text-primary-300'} text-base font-normal cursor-pointer`}>Home</h5>
                <h5 className={`${pathName === '/articles' ? 'text-white' : 'text-primary-300'} text-base font-normal cursor-pointer`}>Artikel</h5>
                <h5 className={`${pathName === '/groups' ? 'text-white' : 'text-primary-300'} text-base font-normal cursor-pointer`}>Grup</h5>
                <h5 className={`${pathName === '/groups' ? 'text-white' : 'text-primary-300'} text-base font-normal cursor-pointer`}>Tentang Kami</h5>
            </div>
        </div>
    );
}

export default NavbarMenuItems;