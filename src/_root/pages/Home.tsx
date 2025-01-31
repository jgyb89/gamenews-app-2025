import { useGetRecentPosts } from '@/lib/react-query/queries';
import { Loader } from 'lucide-react';
import React from 'react'

const Home = () => {
  const { data: posts, isPending: isPostLoading, isError: isErrorPosts } = useGetRecentPosts();

  return (
    <div className='flex flex-1'>
      <div className='home-container'>
        <div className='home-posts'>
          <h2 className='h3-bold md:h2-bold text-left w-full'>Home Feed</h2>
            {isPostLoading && !posts ? (
              <Loader />
            ) : (
              <ul>
                TEST
              </ul>
            )}
        </div>
      </div>

    </div>
  )
}

export default Home