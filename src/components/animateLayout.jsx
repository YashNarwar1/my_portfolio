import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const AnimateLayout = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 0, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -100, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeIn" }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimateLayout;
