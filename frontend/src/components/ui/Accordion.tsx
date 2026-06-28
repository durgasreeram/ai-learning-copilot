import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`flex flex-col gap-3 w-full ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="glass-panel border-white/5 rounded-xl overflow-hidden transition-all duration-300"
          >
            {/* Header Trigger Button */}
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-zinc-200 hover:text-white transition-colors cursor-pointer select-none"
            >
              <span className="text-sm md:text-base font-semibold leading-relaxed">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="text-zinc-500 shrink-0 ml-4"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>

            {/* Answer Content Panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-5 pb-5 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-zinc-900/40">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
