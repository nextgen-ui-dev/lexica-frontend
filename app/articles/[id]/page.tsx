'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import Container from '@/app/components/core/layout/Container';

interface ArticleDetailsProps { 
  
}

const ArticleDetails = ({
  
}: ArticleDetailsProps) => {
  const params = useParams();
  const id = params.id;
  
  return (
    <div className='h-full pt-16'>
      <div className='relative w-full'>
        <Container expanded>
            Currently on Article #{id}
        </Container>
      </div>
    </div>
  );
};

export default ArticleDetails;