import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'legal' | 'privacy' | null;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && type && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content glass-panel"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close">
              <X size={24} />
            </button>
            
            <h2 className="title-large" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
              {type === 'legal' ? t('legal.title') : t('privacy.title')}
            </h2>
            
            <div className="modal-body typography-content">
              {type === 'legal' ? (
                <>
                  <h3>{t('legal.editor.title')}</h3>
                  <p>{t('legal.editor.content')}</p>
                  
                  <h3>{t('legal.hosting.title')}</h3>
                  <p>{t('legal.hosting.content')}</p>
                  
                  <h3>{t('legal.ip.title')}</h3>
                  <p>{t('legal.ip.content')}</p>
                </>
              ) : (
                <>
                  <h3>{t('privacy.data.title')}</h3>
                  <p>{t('privacy.data.content')}</p>
                  
                  <h3>{t('privacy.cookies.title')}</h3>
                  <p>{t('privacy.cookies.content')}</p>
                  
                  <h3>{t('privacy.rights.title')}</h3>
                  <p>{t('privacy.rights.content')}</p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
