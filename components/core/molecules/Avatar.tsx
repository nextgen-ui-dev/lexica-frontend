"use client";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps {
  src: string | null | undefined;
  large?: boolean;
  small?: boolean;
  profileLogo?: boolean;
}

const Avatar = ({ src, large, small, profileLogo }: AvatarProps) => {
  return (
    <div>
      <Image
        className="rounded-full"
        height={large ? 40 : !small ? 30 : 20}
        width={large ? 40 : !small ? 30 : 20}
        alt="Avatar"
        src={src || "/images/placeholder.png"}
      />
      {profileLogo && (
        <FaUserCircle className="absolute -bottom-2 right-0 text-white stroke-primary-500" />
      )}
    </div>
  );
};

export default Avatar;
