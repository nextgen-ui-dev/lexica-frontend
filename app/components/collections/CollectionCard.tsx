import React from 'react'
import Image from 'next/image'
import Avatar from '../core/molecules/Avatar'
import { Collection } from '@/app/types/collection.type'
import { BiBookBookmark } from 'react-icons/bi';



interface CollectionCardProps {
  collection: Collection,
}

const CollectionCard = ({
  collection
}: CollectionCardProps) => {
  return (
    <div className={`
    relative flex flex-row md:flex-col justify-between items-center rounded-lg border border-gray-500 
    min-w-[160px] md:min-w-[240px] 
    min-h-[160px] md:min-h-[240px] 
    h-[160px] md:h-[280px] 
    bg-transparent`}>
      <div className={`relative w-1/2 md:w-full min-h-full md:min-h-[160px] rounded-lg overflow-hidden group`}>
        <Image
          src={collection.thumbnailUrl}
          alt={collection.name}
          fill
          style={{
            objectFit: 'cover',
          }}
          className='group-hover:scale-110 transition bg-primary-500 duration-300'
        />
      </div>

      <div className={`flex flex-col h-full justify-start top-0 px-2 py-4`}>
        <div className={`text-md md:text-lg text-slate-700 font-semibold cursor-default`}>
          Koleksi Lexica Terbaru Saya
        </div>

        <div className={`flex flex-row justify-start w-[160px] md:w-[160px] cursor-default`}>
          <div>
            <Avatar small src={collection.creator.image} />
          </div>
          <div className={`w-2`}></div>
          <div className={`max-w-[110px] md:max-w-[120px] text-sm md:text-md text-slate-600 truncate`} title={collection.creator.name!}>
            {collection.creator.name}
          </div>
        </div>

        <div className={`flex flex-row items-center text-xs md:text-sm text-slate-600 cursor-default`}>
          <BiBookBookmark className='mr-1 md:mr-1.5'/>
          3 artikel
        </div>

        
      </div>
    </div>
  )
}

export default CollectionCard