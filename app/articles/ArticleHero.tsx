import React from 'react';
import Image from 'next/image';

import Test from '@/public/images/test.jpg';
import Container from '../components/core/layout/Container';

interface ArticleHeroProps {

}

const ArticleHero = ({

}: ArticleHeroProps) => {
  return (
    <div className="relative w-full h-[55vh] bg-primary-600">
      {/* <div className='relative w-full h-[40vh]'>
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
      </div> */}
      <Container>
        <div className='relative w-full min-h-[55vh] h-full pt-20 px-4 flex items-stretch'>
          <div className='flex-1 flex flex-col gap-4 md:gap-8 items-center p-8 md:p-16 bg-white rounded-lg'>
            <div className='w-full md:w-1/2'>
              <h5 className='line-clamp-2 text-center'>Ekonomi RI, Pancasila dan Melebarnya Ketimpangan Si Kaya dan Miskin</h5>
            </div>
            <div className='w-full h-full mb-6 flex flex-col md:flex-row gap-4'>
              <div className="hidden md:block relative w-full md:w-1/3 h-full rounded-lg overflow-hidden">
                <Image
                  src='/images/test.jpg'
                  alt=""
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className='w-full h-full'>
                <p className='line-clamp-6 text-justify'>
                  Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet
                </p>
              </div>
            </div>

          </div>
        </div>
      </Container>
      <div className="w-full absolute -bottom-8">
        <Container>
          <div className="w-full p-4 flex flex-col bg-white rounded-md shadow-sm border border-gray-50">
            <h5>Hello</h5>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ArticleHero;