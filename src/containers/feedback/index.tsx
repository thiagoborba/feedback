import React, { useState } from "react";
import { Button, Layout } from '../../components'
import { FeedbackModal } from './modal'
import { sendFeedback } from '../../api/index'
import { Feedback } from '../../api/models'
import { useAlert } from 'react-alert'

export const FeedbackPage = () => {
  const [modal, setModal] = useState(false)

  const alert = useAlert()

  function openModal(){
    setModal(true)
  }

  function closeModal(){
    setModal(false)
  }

  async function saveModal(data: Feedback){
    await saveFeedback(data)
  }

  async function saveFeedback (payload: Feedback) {
    try {
      await sendFeedback(payload)
      alert.show('Feedback enviado, obrigado! :)', { type: 'SUCCESS' })
      closeModal()
    } catch (error) {
      alert.show('Ops, ocorreu um erro ao salvar seu feedback, :(', { type: 'ERROR' })
    }
  }

  return (
    <Layout>
      <Button
        data-testid='button'
        aria-label="Abrir modal"
        label="Abrir modal"
        onClick={openModal}
      />
      <FeedbackModal
        data-testid='modal'
        show={modal}
        onSave={saveModal}
        onClose={closeModal}
        title='Deixe seu feedback'
      />
    </Layout>
  )
}

export default FeedbackPage