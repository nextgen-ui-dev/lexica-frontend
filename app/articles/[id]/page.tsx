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
          <div className='w-full'>
            <div className='font-bold text-2xl md:text-3xl text-slate-700'>
              {article.title}
            </div>
            
            <div className='relative h-full max-h-16 md:max-h-18 flex items-center pt-4 md:pt-6'>
              <div className='w-full md:w-2/3 flex flex-row items-center'>
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
                        (Adapted by Lexica)
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
            </div>
            <div className='pt-4 md:pt-6'>
              <div className='text-slate-600 font-semibold'>
                DROPDOWN
              </div>
            </div>
          </div>
          <div className='w-full pt-6 md:pt-8'>
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