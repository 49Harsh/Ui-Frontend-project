import { motion } from 'framer-motion';

const GradientDivider = () => {
  return (
    <div className="relative h-1 w-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        animate={{
          x: ['-100%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 3,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        animate={{
          x: ['0%', '100%'],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 3,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default GradientDivider;