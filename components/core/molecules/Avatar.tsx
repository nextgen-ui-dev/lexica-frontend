'use client';
import Image from 'next/image';

interface AvatarProps {
  src: string | null | undefined;
  large?: boolean;
  small?: boolean;
}

const Avatar = ({ src, large, small }: AvatarProps) => {
  return (
    <Image
      className="rounded-full"
      height={large ? 40 : !small ? 30 : 20}
      width={large ? 40 : !small ? 30 : 20}
      alt="Avatar"
      src={src || '/images/placeholder.png'}
    />
  );
};

export default Avatar;
