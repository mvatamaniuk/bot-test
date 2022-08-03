import { useEffect, useState } from 'react'

import { Container } from './components/ui/layout'
import { Bubble, BubbleContainer } from './components/ui/chat/bubble'
import { Input } from './components/ui/inputs/input.styled'

import { AgeForm } from './components/age-form/age.form'
import { DiseaseList } from './components/disease-list/disease.list'

import { useSurvey } from './hooks/survey/useSurvey'
import { useBot } from './hooks/bot/useBot'

import { MessageList } from './types/message/message.type'
import { STAGES } from './types/bot/bot.types'

import { DISEASE_MOCK } from './data/disease.mock'
import { messagesStageIntro, messagesStageSurvey } from './data/messages.data'

import './App.css'
import { useUpdateChat } from './hooks/chat/useUpdateChat'

export const App = () => {
  const [chat, setChat] = useState<MessageList>([])

  const { updateStage, stage } = useBot()

  const {
    disease,
    onGenderClick,
    onAgeSubmit,
    onDiseaseClick,
    updateSurveyAgeChat,
    updateSurveyDiseaseChat,
  } = useSurvey()

  const { updateDiseaseDetailChat, updateDiseaseSelectTypeChat } =
    useUpdateChat()

  const onSkip = () => {
    updateStage(STAGES.DiseaseSelectType)
  }

  const onHelpButtonClick = () => updateStage(STAGES.SurveyGender)

  useEffect(() => {
    if (stage === STAGES.Intro)
      return setChat(messagesStageIntro(onHelpButtonClick))

    if (stage === STAGES.SurveyGender)
      return setChat(messagesStageSurvey(onGenderClick))

    if (stage === STAGES.SurveyAge) return setChat(updateSurveyAgeChat)

    if (stage === STAGES.SurveyDisease) return setChat(updateSurveyDiseaseChat)

    if (stage === STAGES.DiseaseDetail)
      return setChat(updateDiseaseDetailChat(onSkip, () => {}, disease))

    if (stage === STAGES.DiseaseSelectType)
      return setChat(updateDiseaseSelectTypeChat)
  }, [stage])

  return (
    <Container>
      {chat.map((message, index) => (
        <BubbleContainer key={index} isIncomig={message.isIncoming}>
          {message.type === 'button' ? (
            message.render && message.render()
          ) : (
            <Bubble isIncomig={message.isIncoming}>{message.body}</Bubble>
          )}
        </BubbleContainer>
      ))}

      {stage === STAGES.SurveyAge && <AgeForm onSubmit={onAgeSubmit} />}

      {stage === STAGES.SurveyDisease && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Input placeholder="Search" />

          <DiseaseList data={DISEASE_MOCK} onClick={onDiseaseClick} />
        </div>
      )}
    </Container>
  )
}
