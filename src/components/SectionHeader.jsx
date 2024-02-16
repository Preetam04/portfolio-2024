import React from "react";

const SectionHeader = ({ content, align, textColor = "textColorWhite" }) => {
  return (
    <h2
      className={`text-${textColor}  font-boldText uppercase text-7xl lg:text-8xl leading-none z-10 text-${align}   inline-block`}
    >
      {content}
    </h2>
  );
};

export default SectionHeader;
