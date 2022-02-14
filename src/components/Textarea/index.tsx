import React from 'react'
import styles from './styles.module.scss'
import { Spacing } from '../'

export interface Prop extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: React.ReactNode;
  errorMessage?: React.ReactNode
}

export const Textarea: React.FC<Prop> = ({ label, name, errorMessage, ...props }) => {
  return (
    <div className={styles['container']}>
      <label
        id={`${name}-textarea-label`}
        htmlFor={`${name}-textarea`}
        className={styles['label']}
      >
        {label}
      </label>
      <Spacing appearance='xx-small'/>
      <textarea
        id={`${name}-textarea`}
        name={name}
        className={`${styles['textarea']} ${errorMessage && 'error'}`}
        data-textarea=""
        aria-labelledby={`${name}-textarea-label`}
        {...props} 
      />
      { !!errorMessage && <span className='error' >{ errorMessage ? errorMessage : '' }</span> }
    </div>
  )
}

export default Textarea