'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AicteCertificate() {
  return (
    <div className="flex items-center justify-center min-h-[600px] bg-slate-900 p-6 perspective-1000">
      {/* 3D Animated Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ 
          rotateX: 4, 
          rotateY: -4, 
          scale: 1.02,
          boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.3)"
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="relative w-full max-w-[480px] rounded-2xl bg-gradient-to-br from-slate-50 to-white p-10 text-center border border-slate-200/80 overflow-hidden group shadow-xl transition-all duration-300"
      >
        
        {/* Decorative Animated Background Glows */}
        <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-400/10 blur-2xl transition-all duration-500 group-hover:bg-blue-400/20" />
        <div className="absolute -left-16 -bottom-16 h-36 w-36 rounded-full bg-orange-400/10 blur-2xl transition-all duration-500 group-hover:bg-orange-400/20" />

        {/* Dynamic Border Accent */}
        <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/10 transition-colors duration-500 pointer-events-none" />

        {/* VSGOI Logo Area with subtle float animation */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative mx-auto mb-8 max-w-[280px] transform transition-transform duration-300 group-hover:scale-105"
        >
          <Image 
            src="/images/vsgoi.jpg" 
            alt="VSGOI Logo" 
            width={280} 
            height={90} 
            className="h-auto w-full object-contain drop-shadow-sm filter contrast-[1.02]"
            priority
          />
        </motion.div>

        {/* Minimalist Separator Text */}
        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-200/80"></div>
          </div>
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className="relative bg-gradient-to-r from-slate-50 to-white px-4 text-xs font-semibold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors duration-300"
          >
            Approved By
          </motion.span>
        </div>

        {/* AICTE Logo Area with Interactive Spin/Scale */}
        <div className="flex flex-col items-center justify-center mt-8">
          <motion.div 
            whileHover={{ 
              rotate: 360,
              scale: 1.08
            }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="relative h-40 w-40 cursor-pointer drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)] group-hover:drop-shadow-[0_12px_24px_rgba(244,162,97,0.25)] transition-all duration-300"
          >
            <Image 
              src="/images/AICTE.jpg" 
              alt="AICTE Logo" 
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Typography Footer Accent */}
          <motion.h2 
            className="mt-8 max-w-[320px] text-base font-bold uppercase tracking-wider leading-relaxed text-slate-800 transition-colors duration-300 group-hover:text-slate-900"
          >
            All India Council for <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-500">
              Technical Education
            </span>
          </motion.h2>
        </div>

      </motion.div>
    </div>
  );
}