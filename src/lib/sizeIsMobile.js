import { useEffect, useState } from "react";

export const sizeIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);

    return () => removeEventListener("resize", check);
  }, []);

  return { isMobile };
};
