import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_STORAGE_KEY = "loadingScreenDisplayed";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const itemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const numberVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const progressBarVariants = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1, transition: { duration: 0.6, ease: "easeInOut" } },
};

export function LoadingScreen({ setIsUnlocked }) {
  const [loadingStarted, setLoadingStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState(0);
  const [hasBeenDisplayed, setHasBeenDisplayed] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [showSessionActiveMessage, setShowSessionActiveMessage] =
    useState(false);

  const loadingPhrases = [
    "Initializing secure connection...",
    "Decrypting sensitive information...",
    "Authenticating user credentials...",
    "Preparing personal workspace...",
    "Almost there...",
  ];

  useEffect(() => {
    const displayed = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (displayed) {
      setHasBeenDisplayed(true);
      setProgress(100);
      setTimeout(() => {
        setShowSessionActiveMessage(true);
        setTimeout(() => {
          setIsUnlocked(true);
        }, 500);
      }, 300);
    } else {
      setHasBeenDisplayed(false);
    }
    setIsCheckingSession(false);
  }, [setIsUnlocked]);

  useEffect(() => {
    let interval;

    if (loadingStarted) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");

      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsUnlocked(true);
            }, 800);
            return 100;
          }

          const newProgress = Math.min(prev + Math.random() * 5 + 2, 100);
          const progressRatio = newProgress / 100;
          const newPhase = Math.floor(progressRatio * loadingPhrases.length);

          if (newPhase > phase) {
            setDisplayText(loadingPhrases[newPhase]);
            setPhase(newPhase);
          }
          return newProgress;
        });
      }, 150);
    }

    return () => clearInterval(interval);
  }, [loadingStarted, setIsUnlocked, phase, loadingPhrases]);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-gray-300 p-6">
      {/* Animated Number - Moved OUTSIDE the conditional block */}
      <motion.div className="text-6xl mb-8 relative h-16 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={Math.floor(progress)}
            variants={numberVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 text-blue-400 font-mono tracking-wide">
            {Math.floor(progress)}%
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {(isCheckingSession || !hasBeenDisplayed) && (
        <motion.div className="flex flex-col items-center gap-12 w-full max-w-md">
          {/* Progress Bar */}
          <motion.div className="w-full bg-zinc-800 h-6 rounded-full overflow-hidden shadow-inner">
            <motion.div
              variants={progressBarVariants}
              initial="initial"
              animate={{ scaleX: progress / 100 }}
              className="bg-blue-400 h-full rounded-full origin-left"
            />
          </motion.div>

          {/* Loading Text */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 font-mono text-lg">
            {isCheckingSession
              ? "Checking for previous session..."
              : displayText}
          </motion.p>
        </motion.div>
      )}

      {!loadingStarted &&
        hasBeenDisplayed &&
        !isCheckingSession &&
        showSessionActiveMessage && (
          <motion.div className="flex flex-col items-center gap-8">
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-mono tracking-tight text-blue-500">
              Accessing Yash's Vault
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 font-mono">
              Session active. Proceeding...
            </motion.p>
          </motion.div>
        )}

      {!loadingStarted && !hasBeenDisplayed && (
        <motion.div className="flex flex-col items-center gap-8">
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-mono tracking-tight text-blue-500">
            Accessing Yash's Vault
          </motion.h1>
          <motion.button
            variants={itemVariants}
            onClick={() => setLoadingStarted(true)}
            className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-zinc-900 transition-all duration-300 font-mono rounded-md shadow-md">
            Initiate Secure Scan
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
