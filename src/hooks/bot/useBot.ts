import { useContext } from 'react'
import { BotContext } from '../../providers/app.provier'

export const useBot = () => useContext(BotContext)
