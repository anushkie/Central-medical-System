import React from "react";

/*
interface TextProps {
    children: React.ReactNode;
    style: CSSProperties;
}

const Text = ({ children, style }: TextProps) {}
*/

const Text = ({ children, style }) => {
  return <p style={style}>{children}</p>;
};

export default Text;
