import { motion, AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

const pageVariants = {
  initial: { opacity: 0, scale: 0.98, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.6, 0.01, -0.05, 0.95] },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -20,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

function AnimatedLayout() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {" "}
      {/* This ensures the exit animation plays before entering */}
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={{ minHeight: "100vh" }} // Prevents layout shifting
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedLayout;
