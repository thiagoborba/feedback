import React from "react";
import { Layout, Button } from '../../components'

export const Feedback = () => {
  
  function onClick (e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e)
  }

  return (
    <Layout>
      <Button
        onClick={onClick}
        label='Open Modal'
      />
    </Layout>
  )
}

export default Feedback