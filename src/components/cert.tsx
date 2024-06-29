"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaCalendarAlt, FaBuilding, FaMedal, FaLink } from 'react-icons/fa';
import Image from 'next/image';

interface Certification {
  id: number;
  title: string;
  image: string;
  description: string;
  issuer: string;
  date: string;
  url?: string;
}

interface CertificationCardProps {
  cert: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-800 flex flex-col sm:flex-row"
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <Image 
            src={cert.image} 
            alt={cert.title} 
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 group-hover:brightness-110"
          />
        </motion.div>
        {/* <motion.div 
          className="absolute top-2 left-2 bg-blue-600 text-white p-2 rounded-full shadow-lg"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <FaCertificate size={24} aria-hidden="true" />
        </motion.div> */}
      </div>
      <div className="p-6 flex-grow">
        <motion.h3 
          className="text-2xl font-bold mb-3 text-white flex items-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <FaMedal className="mr-2 text-yellow-400" />
          {cert.title}
        </motion.h3>
        <motion.p 
          className="text-gray-300 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {cert.description}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-400 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="flex items-center mb-2 sm:mb-0">
            <FaBuilding className="mr-2" />
            {cert.issuer}
          </span>
          <span className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            {cert.date}
          </span>
        </motion.div>
        {cert.url && (
          <motion.a 
            href={cert.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FaLink className="mr-2" />
            View Certificate
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.h1 
          className=" text-center mb-12 text-white flex justify-center items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaCertificate className="mr-4 text-white-400" size={24} />
         | My Certifications |
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.id} layout>
              <CertificationCard cert={cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;