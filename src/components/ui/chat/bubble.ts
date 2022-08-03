import styled from 'styled-components'

interface IBubbleProps {
  isIncomig?: boolean
}

export const Bubble = styled.div<IBubbleProps>`
  background: ${(props) =>
    props.isIncomig
      ? 'linear-gradient(90deg, #264653 0%, #316276 100%)'
      : 'linear-gradient(90deg, #2A9D8F 0%, #107E71 100%)'};

  max-width: 75%;
  width: fit-content;
  padding: 20px;

  border-radius: 8px;

  color: #fff;
  font-size: 16px;
`

export const BubbleContainer = styled.div<IBubbleProps>`
  width: 100%;

  margin: 20px 0;

  display: flex;
  justify-content: ${(props) => (props.isIncomig ? 'flex-start' : 'flex-end')};
`
