import * as React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { FeedbackPage } from "./index";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import '@testing-library/jest-dom'

test("should render FeedbackPage and fill the form", async () => {
  render(
    <AlertProvider template={AlertTemplate}>
      <FeedbackPage />
    </AlertProvider>
  );

  const button = screen.getByTestId('button');
  expect(button).toBeInTheDocument();

  fireEvent.click(button)

  const modal = screen.getByTestId('modal')

  expect(modal).toBeInTheDocument();

  const name = screen.getByTestId('name')
  const rate = screen.getByTestId('rate-5')
  const message = screen.getByTestId('message')
  const submit = screen.getByTestId('submit')

  fireEvent.change(name, { target: { value: "Thiago" } })

  fireEvent.click(rate)
  fireEvent.change(message, { target: { value: 'ótimo' } })
  fireEvent.click(submit)
});
