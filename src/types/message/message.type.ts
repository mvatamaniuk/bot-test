export type MessageList = Array<IMessage>
type MessageType = 'button' | 'input'

export interface IMessage {
  body?: string
  title?: string
  isIncoming?: boolean
  render?: () => JSX.Element
  type?: MessageType
}
