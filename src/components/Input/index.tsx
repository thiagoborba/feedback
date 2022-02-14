import React from "react";
import styles from './styles.module.scss'
import { Spacing } from '../'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  errorMessage?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(({ label, name, errorMessage, ...props }, ref) => {
  return (
    <div className={styles['container']}>
      <label
        id={`${name}-input-label`}
        htmlFor={`${name}-input`}
        className={styles['label']}
      >
        { label }
      </label>
      <Spacing appearance="xx-small"/>
      <input
        id={`${name}-input`}
        name={name}
        aria-labelledby={`${name}-input-label`}
        className={`${styles['input']} ${errorMessage && 'error'}`}
        {...props}
      />
      { !!errorMessage && <span className='error' >{ errorMessage ? errorMessage : '' }</span> }
    </div>
  )
})