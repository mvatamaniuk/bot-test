import { createContext, FC, ReactNode, useMemo, useState } from 'react'
import { useSurvey } from '../hooks/survey/useSurvey'
import { STAGES } from '../types/bot/bot.types'

interface IBotContext {
  stage: STAGES
  chat: Array<any>
  updateStage: (stage: STAGES) => void
}

interface IBotContextProps {
  children: ReactNode
}

export const BotContext = createContext<IBotContext>({} as IBotContext)

export const BotProvider: FC<IBotContextProps> = ({ children }) => {
  const [stage, setStage] = useState(STAGES.Intro)
  const [chat, setChat] = useState([])

  const updateStageHandler = (stage: STAGES) => {
    setStage(stage)
  }

  const value = useMemo(
    () => ({
      stage,
      chat,
      updateStage: updateStageHandler,
    }),
    [stage]
  )

  return <BotContext.Provider value={value}>{children}</BotContext.Provider>
}
