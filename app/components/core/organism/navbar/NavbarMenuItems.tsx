'use client';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

interface NavbarMenuItemsProps {
    isOpen: boolean;
}

const NavbarMenuItems = ({
    isOpen
}: NavbarMenuItemsProps) => {
    const router = useRouter();
    const pathName = usePathname();

    const handleRoute = (event: MouseEvent<HTMLHeadingElement>) => {
        const targetPath = event.currentTarget.getAttribute('data-path');
        if (targetPath) {
            router.push(targetPath);
        }
    };

    return (
        <div className={`fixed md:static flex justify-center items-center w-full min-h-[28vh] md:min-h-fit md:bg-transparent left-0 ${isOpen ? 'top-14 bg-primary-600' : '-top-96'} border-b border-gray-200 md:border-none w-full duration-200`}>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
                <h5
                    data-path="/"
                    onClick={handleRoute}
                    className={`${pathName === '/' ? 'text-white' : 'text-primary-300'} px-2 py-1 text-base font-normal cursor-pointer hover:text-white`}>Home</h5>
                <h5
                    data-path="/articles"
                    onClick={handleRoute}
                    className={`${pathName.includes('/articles') ? 'text-white' : 'text-primary-300'} px-2 py-1 text-base font-normal cursor-pointer hover:text-white`}>Artikel</h5>
                <h5
                    data-path="/about"
                    onClick={handleRoute}
                    className={`${pathName === '/about' ? 'text-white' : 'text-primary-300'} px-2 py-1 text-base font-normal cursor-pointer`}>Tentang Kami</h5>
            </div>
        </div>
    );
}

export default NavbarMenuItems;