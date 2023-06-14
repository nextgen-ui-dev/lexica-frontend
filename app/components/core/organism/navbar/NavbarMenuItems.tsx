'use client';
import { usePathname } from 'next/navigation';

const NavbarMenuItems = () => {
    const pathName = usePathname();
    
    return (
        <div className="flex flex-row justify-center items-center gap-4">
            <h5 className={`${pathName === '/' ? 'text-white' : 'text-primary-300'} text-base font-normal cursor-pointer`}>Home</h5>
            <h5 className={`${pathName === '/articles' ? 'text-white' : 'text-primary-300'} text-base font-normal cursor-pointer`}>Artikel</h5>
            <h5 className={`${pathName === '/groups' ? 'text-white' : 'text-primary-300'} text-base font-normal cursor-pointer`}>Grup</h5>
            <h5 className={`${pathName === '/groups' ? 'text-white' : 'text-primary-300'} text-base font-normal cursor-pointer`}>Tentang Kami</h5>
        </div>
    );
}
 
export default NavbarMenuItems;