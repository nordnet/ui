import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { UnderlineAnimationProps } from './AnimatedUnderline.types';
import { UnderlineAnimation } from './AnimatedUnderline.styles';

const AnimatedUnderline: React.FC<{
  flexProps: UnderlineAnimationProps;
  left?: number;
  width?: number;
}> = ({ flexProps, left, width }) => {
  return (
    <AnimatePresence>
      {!!left && !!width && (
        <UnderlineAnimation
          initial={false}
          animate={{ left: `${left}px`, width: `${width}px` }}
          transition={{ duration: 0.2 }}
          {...flexProps}
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedUnderline;
