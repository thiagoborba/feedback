import React from 'react';
import { FeedbackPage } from '../feedback'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

function App() {
  return (
    <main>
      <AlertProvider template={AlertTemplate} {...options}>
        <FeedbackPage />
      </AlertProvider>
    </main>
  );
}

export default App;