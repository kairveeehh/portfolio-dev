// components/MyProjects.tsx
'use client';
import React, { useState } from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import Image from 'next/image';
import LoadMoreButton from './loadmore';

interface Project {
  title: string;
  description: string;
  imageSrc: string;
}

interface MyProjectsProps {
  projects: Project[];
  showLoadMore?: boolean; // Add this prop
}

const MyProjects: React.FC<MyProjectsProps> = ({ projects, showLoadMore = false }) => {
  const [visibleProjects, setVisibleProjects] = useState(2);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 2);
  };

  return (
    <div className='mt-20'>
      <div className='flex justify-center items-center'>
        <FaFolderOpen className='text-2xl mr-2' />
        <h1 className='text-center'>My Projects</h1>
      </div>
      <div className='grid grid-cols-2 gap-y-5 justify-items-center px-2 py-2 mt-5'>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className='bg-white dark:bg-gray-800 p-4 rounded shadow-lg flex items-center'>
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={60}
              height={60}
              className='object-cover rounded mr-4'
            />
            <div>
              <h2 className='text-lg font-bold'>{project.title}</h2>
              <p className='text-sm text-gray-600 dark:text-gray-300'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    <LoadMoreButton />
    </div>
  );
};

export default MyProjects;
