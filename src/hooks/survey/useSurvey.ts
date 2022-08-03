import { FormEvent, useState, MouseEvent } from 'react'
import { STAGES } from '../../types/bot/bot.types'
import { MessageList } from '../../types/message/message.type'

import { AgeFormElements } from '../../types/survey/survey-form.types'
import { GENDER } from '../../types/survey/survey.types'
import { useBot } from '../bot/useBot'

export const useSurvey = () => {
  const [age, setAge] = useState<number | null>(null)
  const [gender, setGender] = useState<GENDER | null>(null)
  const [disease, setDisease] = useState('')

  const { updateStage } = useBot()

  const onAgeSubmitHanlder = (event: FormEvent<AgeFormElements>) => {
    event.preventDefault()

    const currentAgeValue = Number(event.currentTarget.elements.age.value)

    setAge(currentAgeValue)

    updateStage(STAGES.SurveyDisease)
  }

  const onGenderClickHadler = (event: MouseEvent<HTMLButtonElement>) => {
    const { gender } = (event.target as HTMLButtonElement).dataset

    setGender(gender as GENDER)

    updateStage(STAGES.SurveyAge)
  }

  const onDiseaseClickHadler = (disease: string) => {
    setDisease(disease)

    updateStage(STAGES.DiseaseDetail)
  }

  const updateSurveyAgeChat = (chat: MessageList) => {
    return chat
      .filter((chat) => chat.type !== 'button')
      .concat(
        { body: gender! },
        {
          body: 'Ok. Got it And how old are you? (or the patient)',
          isIncoming: true,
        }
      )
  }

  const updateSurveyDiseaseChat = (chat: MessageList) => {
    return chat.concat(
      { body: `${age} years old` },
      { body: 'Please let me know what is bothering you', isIncoming: true }
    )
  }

  return {
    onAgeSubmit: onAgeSubmitHanlder,
    onGenderClick: onGenderClickHadler,
    onDiseaseClick: onDiseaseClickHadler,
    updateSurveyAgeChat,
    updateSurveyDiseaseChat,
    age,
    gender,
    disease,
  }
}
