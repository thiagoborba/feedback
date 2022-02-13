import React from "react";
import styles from './styles.module.scss'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: React.FC<Props> = ({ onClick, label, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={styles['btn']}
    >
      { label }
    </button>
  )
}

export default Button