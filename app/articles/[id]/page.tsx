'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import Container from '@/app/components/core/layout/Container';

import { Articles } from '@/app/constants/article.constant';

interface ArticleDetailsProps { 
  
}

const ArticleDetails = ({
  
}: ArticleDetailsProps) => {
  const params = useParams();
  const id = parseInt(params.id);

  const article = Articles.filter(art => art.id === id)[0];

  return (
    <div className='h-full pt-16'>
      <div className='relative w-full py-4 md:py-6'>
        <Container expanded>
          <div className='w-full h-[25vh] md:h-[22vh]'>
            <div className='font-bold text-2xl md:text-3xl text-slate-700'>
              {article.title}
            </div>
            
            <div className='relative h-full max-h-16 md:max-h-18 flex items-center pt-4 md:pt-6'>
              <div className='w-2/3 flex flex-row'>
                <div className='h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary-500 overflow-hidden flex flex-row items-center'>
                  <Image 
                    src='/images/author.jpg' 
                    alt=''
                    // fill
                    width={100}
                    height={100}
                    style={{
                      objectFit: 'cover',
                    }}
                    className='h-full w-full'
                  />
                </div>
                <div className='pl-4'>
                  <div className='text-slate-600 font-semibold'>
                    {article.source}
                  </div>
                  <div className='text-slate-500 font-medium'>
                    {article.author}
                  </div>
                  <div className='text-slate-400 font-medium'>
                    {article.year}
                  </div>
                </div>
              </div>
              {/* TODO create dropdown difficulty */}
              {/* <div className='w-1/3'>
                <div>
                  {article.difficulty}
                </div>
              </div> */}
            </div>
          </div>
          <div className='w-full'>
            <pre className='whitespace-pre-line'>
              {article.content}
            </pre>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ArticleDetails;