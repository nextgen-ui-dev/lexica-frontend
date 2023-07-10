import React from 'react'
import CollectionCard from './CollectionCard'
import { Collections } from '@/app/constants/collections.constant'

type Props = {}

const CollectionsFeed = (props: Props) => {
  return (
      <div 
        className={`
          flex flex-col py-[20px] 
          md:grid md:grid-cols-3 md:gap-8 md:py-[32px]`
        }>
        <div className='pt-[10px] md:pt-[0px]'>
          <CollectionCard collection={Collections[0]} />
        </div>

        <div className='pt-[10px] md:pt-[0px]'>
          <CollectionCard collection={Collections[0]} />
        </div>

        <div className='pt-[10px] md:pt-[0px]'>
          <CollectionCard collection={Collections[0]} />
        </div>

        <div className='pt-[10px] md:pt-[0px]'>
          <CollectionCard collection={Collections[1]} />
        </div>

        <div className='pt-[10px] md:pt-[0px]'>
          <CollectionCard collection={Collections[1]} />
        </div>
      </div>
  )
}

export default CollectionsFeed