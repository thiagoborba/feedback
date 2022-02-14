import React, { useCallback, useEffect } from "react";
import styles from './styles.module.scss'
import { Spacing, Button } from '../'
import { Props  as ButtonProps} from '../Button'
import cn from 'clsx'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  show: boolean;
  button: ButtonProps;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ title, children, className, button, onClose , show, ...props}) => {
  const handleClickOutSide =  useCallback((e: any) => {
    if (e.target.id === 'modal-container') {
      onClose && onClose()
    }
  }, [onClose])

  useEffect(() => {
    document.addEventListener("click", handleClickOutSide)
    return () => window.removeEventListener('click', handleClickOutSide)
  }, [handleClickOutSide])

  return (
    <div
      id='modal-container'
      className={cn(styles['modal'], className, {
        [styles['-display-none']]: !show,
      } )}
      { ...props }
    >
      <div className={styles['content']}>
        <h1 className={styles['title']}>{title}</h1>
        <Spacing appearance="medium"/>
          { children }
        <Spacing appearance="medium"/>
        <Button
          label={button.label}
          onClick={button.onClick}
          data-testid={button['data-testid']}
        />
      </div>
    </div>
  )
}

export default Modal