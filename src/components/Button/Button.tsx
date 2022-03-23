import React, { HTMLAttributes, ReactNode, useState } from "react";
import styles from "./Button.module.scss";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;

  /** Provide a text for the button */
  text: string;
  /** Provide a size for the button */
  size: "sm" | "md" | "lg";
  /** Which variant look would you like use */
  variant: "primary" | "secondary";
}

export const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  text,
  size = "md",
  label,
}) => {
  const [loaded, setLoaded] = useState<boolean>(true);

  let padding = "";
  if (size === "sm") padding = styles.padding_sm;
  if (size === "md") padding = styles.padding_md;
  if (size === "lg") padding = styles.padding_lg;

  let defaultStyles = "";
  if (variant === "primary") defaultStyles = styles.primary;
  if (variant === "secondary") defaultStyles = styles.secondary;

  let loaddingAnimation = !loaded ? styles["button-loading"] : "";

  return (
    <button
      className={`
      ${styles.button} 
      ${defaultStyles} 
      ${padding} 
      ${loaddingAnimation}`}
      aria-label={label}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setLoaded(false);
        // wait till fully loaded
        setTimeout(() => {
          setLoaded(true);
        }, 2000);
      }}
    >
      <span className={styles.text}>{text}</span>
    </button>
  );
};
