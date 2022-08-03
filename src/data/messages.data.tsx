import { MouseEvent } from 'react'

import { ButtonChat } from '../components/ui/buttons/button.styled'
import { MessageList } from '../types/message/message.type'

export const messagesStageIntro = (onClick: () => void): MessageList => {
  return [
    {
      body: 'I will present you with reliable information and consumer tips that pharmacists use, so you can choose the most effective over-the-counter (OTC) treatment. Your chat will be fully confidential.',
      isIncoming: true,
    },
    {
      body: 'Please tell me how can I help you?',
      isIncoming: true,
    },
    {
      type: 'button',
      render: () => (
        <ButtonChat onClick={onClick}>
          Help me find the right OTC treatment for my condition
        </ButtonChat>
      ),
    },
    {
      type: 'button',
      render: () => (
        <ButtonChat onClick={onClick}>
          Search for drug/product name or active ingredient
        </ButtonChat>
      ),
    },
  ]
}

export const messagesStageSurvey = (
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
): MessageList => {
  return [
    {
      body: 'Help me find OTC for my symptoms',
    },
    {
      body: 'First, I need to know your (or the person you are caring for) gender. Im asking this because it could really affect the results',
      isIncoming: true,
    },
    {
      type: 'button',
      render: () => (
        <ButtonChat data-gender="Male" onClick={onClick}>
          Male
        </ButtonChat>
      ),
    },
    {
      type: 'button',
      render: () => (
        <ButtonChat data-gender="Demale" onClick={onClick}>
          Female
        </ButtonChat>
      ),
    },
  ]
}
