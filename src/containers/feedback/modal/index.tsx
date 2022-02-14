import React from "react";
import { Modal, Input, Spacing, Rating, Textarea } from '../../../components'
import { FormikErrors, useFormik } from 'formik'
import { ERROR_DEFAULT } from "../../../constants";

type Props = {
  show: boolean,
  title: string,
  onSave: (values: Values) => void,
  onClose: () => void
}

type Values = {
  name: string,
  rating: number,
  message: string
}

function validate (values: Values) {
  let errors: FormikErrors<Values> = {}

  if (!values.rating) errors.rating = ERROR_DEFAULT
  if (!values.name) errors.name = ERROR_DEFAULT
  if (!values.message) errors.message = ERROR_DEFAULT

  return errors
}

export const FeedbackModal: React.FC<Props> = ({ show, title, onSave, onClose, ...props }) => {
  const { values, errors, handleChange, handleBlur, setFieldValue, handleSubmit, submitForm, touched, submitCount } = useFormik<Values>({
    initialValues: {
      name: '',
      rating: 0,
      message: ''
    },
    onSubmit: (values) => onSave(values),
    validate
  })

  return (
    <Modal
      show={show}
      button={{
        label: 'Enviar',
        onClick: submitForm,
        'data-testid': 'submit'
      }}
      onClose={onClose}
      title={title}
      {...props}
    >
    <form  noValidate onSubmit={handleSubmit}>
      <Input
        data-testid='name'
        name='name'
        label='Seu nome:'
        aria-label="Seu nome"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={(touched.name || submitCount) && errors.name}
      />
      <Spacing appearance="small"/>
      <Rating
        label="Sua nota:"
        value={values.rating}
        aria-label="Sua nota"
        onRating={value => setFieldValue('rating', value)}
        errorMessage={(touched.rating || submitCount) && errors.rating}
      />
      <Spacing appearance="small"/>
      <Textarea
        data-testid='message'
        name="message"
        label='Sua mensagem:'
        aria-label="Sua nota"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={(touched.message || submitCount) && errors.message}
      />
      <Spacing appearance="small"/>
    </form>
  </Modal>
  )
}