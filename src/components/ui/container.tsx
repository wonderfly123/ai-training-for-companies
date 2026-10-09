import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "article";
  id?: string;
}

export function Container({ children, className = "", as = "div", id }: ContainerProps) {
  const Tag = as;
  return (
    <Tag id={id} className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
