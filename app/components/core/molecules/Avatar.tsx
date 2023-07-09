'use client';
import Image from 'next/image';

interface AvatarProps {
    src: string | null | undefined,
    large?: boolean
}

const Avatar = ({ 
    src, 
    large 
}: AvatarProps) => {
    return (
        <Image
            className='rounded-full'
            height={large ? 40 : 30}
            width={large ? 40 : 30}
            alt='Avatar'
            src={src || '/images/placeholder.png'}
        />
    );
}

export default Avatar;