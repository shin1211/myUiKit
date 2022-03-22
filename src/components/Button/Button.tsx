import React, { HTMLAttributes, ReactNode, SyntheticEvent } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: "primary" | "secondary";
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
  text,
  size = "md",
  label,
}) => {
  // const classNames = cn({
  //   [styles[`button_padding_${size}`]]: size,
  // });
  let padding = "";
  if (size === "sm") padding = styles.padding_sm;
  if (size === "md") padding = styles.padding_md;
  if (size === "lg") padding = styles.padding_lg;

  return (
    <button className={`${styles.button} ${padding}`} aria-label={label}>
      {children}
      {text}
    </button>
  );
};
