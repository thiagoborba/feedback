import React from "react";
import styles from './styles.module.scss'
import { Spacing } from "../";
import cn from 'clsx'

const RATING_CLASS = "rate fa fa-star"

interface Props extends React.HTMLAttributes<HTMLElement> {
  label: string;
  onRating: (s: string) => void,
  value: number,
  errorMessage?: React.ReactNode;
}

export const Rating: React.FC<Props> = ({ label, onRating, value, errorMessage, ...props }) => {
  
  function setClassName(dataValue: number) {
    return cn(styles['rating'], RATING_CLASS, { [styles['-checked']]: value && value >= dataValue })
  }

  function handleClick (e: React.MouseEvent<HTMLSpanElement>) {
    const { value } = e.currentTarget.dataset
    onRating && onRating(value!)
  }

  return (
    <div
      className={styles['container']}
      {...props}
    >
      <label>{ label }</label>
      <Spacing appearance="xx-small"/>
      <div className={`${styles['rating']} ${errorMessage && 'error'}`}>
        <button data-testid='rate-1' type="button" onClick={handleClick} data-value={1} className={setClassName(1)}></button>
        <button data-testid='rate-2' type="button" onClick={handleClick} data-value={2} className={setClassName(2)}></button>
        <button data-testid='rate-3' type="button" onClick={handleClick} data-value={3} className={setClassName(3)}></button>
        <button data-testid='rate-4' type="button" onClick={handleClick} data-value={4} className={setClassName(4)}></button>
        <button data-testid='rate-5' type="button" onClick={handleClick} data-value={5} className={setClassName(5)}></button>
      </div>
      { !!errorMessage && <span className='error' >{ errorMessage ? errorMessage : '' }</span> }
    </div>
  )
}

export default Rating