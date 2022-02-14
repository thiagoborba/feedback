import React from "react";
import styles from './styles.module.scss'

export const Layout: React.FC = ({ children, ...props }) => {
  return (
    <div
      className={styles['container']}
      {...props}
    >
      { children }
    </div>
  )
}