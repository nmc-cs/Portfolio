import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0, opacity: 0 },
  active: { width: "calc(100% - 0.75rem)", opacity: 1 },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#BA3B2A]" : "text-white";

  return (
    <button onClick={selectTab} className="mr-3">
      <p className={`font-semibold ${buttonClasses} transition-colors duration-300 ease-in-out hover:text-[#BA3B2A]`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#BA3B2A] mt-2 transition-all duration-300 ease-in-out"
      ></motion.div>
    </button>
  );
};

export default TabButton;
