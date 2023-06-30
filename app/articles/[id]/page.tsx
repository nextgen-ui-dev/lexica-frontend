'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import Container from '@/app/components/core/layout/Container';
import DifficultyDropdown from '@/app/components/articles/DifficultyDropdown';
import ArticleDetailMenu from '@/app/components/articles/ArticleDetailMenu';

import { Articles } from '@/app/constants/article.constant';

const difficulty = [
  "Lanjutan",
  "Menengah",
  "Pemula"
];

interface ArticleDetailsProps {

}

const ArticleDetails = ({

}: ArticleDetailsProps) => {
  const params = useParams();
  const id = parseInt(params.id);

  // @Jere todo get data from API
  const article = Articles.filter(art => art.id === id)[0];

  return (
    <>
      <section className='w-full h-[25dvh] md:h-[37dvh] bg-primary-600 flex flex-row items-center justify-center'>
        <div className='w-full max-w-md'>
          <h2 className='mt-6 md:mt-12 text-center text-white'>{article.title}</h2>
          <div className='mt-6 md:mt-8 mb-2'>
            <ArticleDetailMenu />
          </div>
        </div>
      </section>
      <section className='w-full min-h-[70dvh] bg-primary-600'>
        <div className='w-full min-h-[70dvh] bg-white p-4 md:p-8 rounded-t-[6dvh] md:rounded-t-[8dvh]'>
          <Container>
            <div className='w-full'>
              <div className='relative h-full max-h-16 md:max-h-18 flex flex-row items-center justify-between'>
                <div className='w-full md:w-2/3 flex flex-row items-center pt-4 md:pt-6'>
                  <div className='relative h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary-500 overflow-hidden flex flex-col justify-center'>
                    <Image
                      src='/images/author.jpg'
                      alt=''
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                      className='h-full w-full'
                    />
                  </div>
                  <div className='pl-4'>
                    <div className='text-slate-600 font-semibold text-md md:text-sm'>
                      {article.source}
                      {article.adapted && (
                        <span className='pl-1 md:pl-1.5'>
                          (Adapted)
                        </span>
                      )}
                    </div>
                    <div className='text-slate-500 font-medium text-sm md:text-xs'>
                      {article.author}
                    </div>
                    <div className='text-slate-400 font-medium text-sm md:text-xs'>
                      {article.year}
                    </div>
                  </div>
                </div>
              {/* Desktop dropdown */}
              <div className='hidden relative md:flex flex-col text-slate-600 font-semibold z-10'>
                <div className='text-gray-500 text-right text-xs'>Kesulitan artikel</div>
                <div className=''>
                  <DifficultyDropdown options={difficulty} description='' expanded />
                </div>
              </div>
              </div>

              {/* Mobile dropdown */}
              <div className='md:hidden relative flex flex-col text-slate-600 font-semibold pt-6 z-10'>
                <div className='text-gray-500 text-left text-xs'>Kesulitan artikel</div>
                <div className=''>
                  <DifficultyDropdown options={difficulty} description='' expanded leftAlign />
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center w-full h-full pt-8 md:pt-12'>
              <div className='relative rounded-xl overflow-hidden w-[300px] md:w-[600px] h-[200px] md:h-[400px] mt-2 md:mt-4 mb-10 md:mb-12'>
                <Image 
                  src='/images/test.jpg' 
                  alt='Article image' 
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              <pre className='whitespace-pre-line text-justify text-md md:text-lg text-gray-600 font-normal'>
                {article.content}
              </pre>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default ArticleDetails;
