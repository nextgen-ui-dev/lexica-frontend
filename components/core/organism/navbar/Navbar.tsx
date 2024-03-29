"use client";

import { useCallback, useEffect, useState } from "react";
import Container from "../../layout/Container";
import HeadRoom from "react-headroom";
import NavbarLogo from "./NavbarLogo";
import NavbarMenuItems from "./NavbarMenuItems";
import NavbarUserMenu from "./NavbarUserMenu";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleItemMenus = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen, isOpen]);

  return (
    <nav className="md:fixed w-full z-10">
      <HeadRoom>
        <div
          className={`fixed md:relative w-full py-4 ${
            isScroll && "bg-primary-600 border-b border-primary-500"
          }`}
        >
          <Container expanded>
            <div className="flex flex-row justify-between items-center">
              <NavbarLogo />
              <NavbarMenuItems isOpen={isOpen} handleClose={handleClose} />
              <NavbarUserMenu
                user={user}
                isOpen={isOpen}
                isScroll={isScroll}
                onClick={toggleItemMenus}
              />
            </div>
          </Container>
        </div>
      </HeadRoom>
    </nav>
  );
};

export default Navbar;
