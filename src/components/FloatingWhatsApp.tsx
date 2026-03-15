'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = '94779054385'; // Sri Lankan number without +
  const defaultMessage = "Hello! I'm interested in learning more about your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const handleWhatsAppClick = () => {
    window.location.href = whatsappUrl;
  };

  const floatingVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  };

  const messageVariants = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
    transition: { delay: 0.1 },
  };

  return (
    <>
      {/* WhatsApp Chat Bubble Message */}
      {isOpen && (
        <motion.div
          className="fixed bottom-28 right-6 z-50 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-5 max-w-xs border border-slate-200 dark:border-slate-700"
          variants={messageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg flex items-center gap-2">
                <MessageCircle size={20} className="text-[#25D366]" />
                Chat with us!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                Have questions? Message us on WhatsApp and we'll respond within 24 hours!
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Start Chat
            </button>
          </div>
        </motion.div>
      )}

      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#20BA5C] rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={28} />
          
          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 bg-[#25D366] rounded-full opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Notification dot */}
          <motion.div
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.button>
      </motion.div>
    </>
  );
}
