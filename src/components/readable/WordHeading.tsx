import { Fragment } from "react";
import "./WordHeading.css";

interface WordHeadingProps {
  children: string;
  as?: "h1" | "h2";
  className?: string;
  start?: "page" | "hero";
}

export function WordHeading({
  children,
  as: Tag = "h1",
  className,
  start = "page",
}: WordHeadingProps) {
  return (
    <Tag className={className} data-word-start={start}>
      {children.split(/\s+/).map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          {index > 0 ? " " : null}
          <span className="motion-word">{word}</span>
        </Fragment>
      ))}
    </Tag>
  );
}
