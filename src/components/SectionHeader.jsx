import React from "react";

const SectionHeader = ({ content, align }) => {
  return (
    <h2
      className={`text-TextColor font-boldText uppercase text-7xl sm:text-8xl leading-none z-10 text-${align}   inline-block`}
    >
      {content}
    </h2>
  );
};

export default SectionHeader;
