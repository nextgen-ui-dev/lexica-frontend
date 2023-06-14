import React from 'react';
import Image from 'next/image';

import Test from '@/public/images/test.jpg';

interface ArticleHeroProps {

}

const ArticleHero = ({

}: ArticleHeroProps) => {
  return (
    <div className='flex flex-col relative w-full'>
      <div className='relative w-full h-[40vh]'>
        <Image 
          src={Test}
          alt=''
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className='pt-4'>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </h3>
        <p className='line-clamp-3 text-justify text-sm md:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque velit debitis similique laudantium ad dolores adipisci neque quaerat commodi dolore ea quae ipsum id sunt, culpa consectetur rerum, quo ducimus! Distinctio ullam incidunt dolorum nemo? Esse, quae cum. Obcaecati voluptate soluta et sequi possimus repellat quod? Amet exercitationem nulla enim earum labore! Exercitationem rerum ex odio ab sed itaque tempore ut, enim animi quaerat aspernatur praesentium velit aut molestiae dolorum reiciendis, illum rem assumenda optio soluta corporis ipsam.
        </p>
      </div>
      {/* <div className='absolute text-white text-xl top-1/2 left-5'>
        Lorem ipsum dolor sit amet consectetur.
      </div> */}
    </div>
  );
};

export default ArticleHero;