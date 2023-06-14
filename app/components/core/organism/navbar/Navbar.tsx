'use client';

import { useCallback, useEffect, useState } from 'react';
import Container from "../../layout/Container";
import HeadRoom from 'react-headroom';
import NavbarLogo from './NavbarLogo';
import NavbarMenuItems from './NavbarMenuItems';
import NavbarUserMenu from './NavbarUserMenu';

const Navbar = () => {

    const [isScorll, setIsScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const toggleItemMenus = useCallback(() => {
        setIsOpen(!isOpen);
    }, [setIsOpen, isOpen]);

    return (
        <nav className="md:fixed w-full z-10">
            <HeadRoom>
                <div className={`fixed md:relative w-full py-4 ${isScorll && 'bg-primary-600 md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-80 border-b border-primary-500'}`}>
                    <Container expanded>
                        <div className='flex flex-row justify-between items-center'>
                            <NavbarLogo />
                            <NavbarMenuItems
                                isOpen={isOpen}
                            />
                            <NavbarUserMenu
                                isOpen={isOpen}
                                onClick={toggleItemMenus}
                            />
                        </div>
                    </Container>
                </div>
            </HeadRoom>
        </nav>
    );
}

export default Navbar;