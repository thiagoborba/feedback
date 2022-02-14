import React from "react";
import styles from './styles.module.scss'

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  [k: string]: any
}

export const Button: React.FC<Props> = ({ onClick, label, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={styles['btn']}
      {...props}
    >
      { label }
    </button>
  )
}

export default Button