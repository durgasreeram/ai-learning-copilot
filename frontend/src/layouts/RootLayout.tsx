import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from '../components/layout/Sidebar';
import { slideUp } from '../animations/variants';

export const RootLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#09090B] text-zinc-100 selection:bg-purple-500/30 selection:text-white">
      {/* Side Navigation panel */}
      <Sidebar />

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative overflow-hidden">
        {/* Ambient Top Glow Effect */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] glow-purple opacity-[0.15] blur-[120px] pointer-events-none -z-0" />


        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideUp}
              className="min-h-full flex flex-col"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};
