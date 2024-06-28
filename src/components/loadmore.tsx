// components/LoadMoreButton.tsx
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const LoadMoreButton: React.FC = () => {
  return (
    <div className='flex justify-center mt-5'>
      <a
        href="/projects"
        className='flex items-center px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-700 transition duration-300'
      >
        <FaPlus className='mr-2' />
        Load More
      </a>
    </div>
  );
};

export default LoadMoreButton;
