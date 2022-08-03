import { ButtonChat } from '../../components/ui/buttons/button.styled'
import { MessageList } from '../../types/message/message.type'

export const useUpdateChat = () => {
  const updateDiseaseDetailChat =
    (onSkip: () => void, onMore: () => void, disease: string) =>
    (chat: MessageList) => {
      return chat.concat(
        {
          body: disease,
        },
        {
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et quidem fuga beatae, quas nulla, reiciendis voluptatibus harum tempore ipsa provident nihil debitis pariatur ad quasi aliquam repudiandae odit. Tenetur.',
          isIncoming: true,
        },
        {
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et quidem fuga beatae, quas nulla, reiciendis voluptatibus harum tempore ipsa provident nihil debitis pariatur ad quasi aliquam repudiandae odit. Tenetur.',
          isIncoming: true,
        },
        {
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et quidem fuga beatae, quas nulla, reiciendis voluptatibus harum tempore ipsa provident nihil debitis pariatur ad quasi aliquam repudiandae odit. Tenetur.',
          isIncoming: true,
        },
        {
          type: 'button',
          render: () => <ButtonChat onClick={onSkip}>Skip</ButtonChat>,
        },
        {
          type: 'button',
          render: () => <ButtonChat onClick={onMore}>I need more</ButtonChat>,
        }
      )
    }

  const updateDiseaseSelectTypeChat = (chat: MessageList) => {
    return chat
      .filter((item) => item.type !== 'button')
      .concat(
        {
          body: '"Fast track" - skip additional questions and display me with products for my condition',
        },
        {
          body: 'Thanks, one last question Please SELECT which dosage form you would prefer You may choose more than one dosage form ',
          isIncoming: true,
        },
        {
          type: 'button',
          render: () => <ButtonChat>Gel</ButtonChat>,
        },
        {
          type: 'button',
          render: () => <ButtonChat>Drops</ButtonChat>,
        }
      )
  }

  return {
    updateDiseaseDetailChat,
    updateDiseaseSelectTypeChat,
  }
}
