import { FC, FormEvent } from 'react'

import { Input } from '../ui/inputs/input.styled'
import { AgeFormElements } from '../../types/survey/survey-form.types'
import { ButtonChat } from '../ui/buttons/button.styled'

interface IAgeFormProps {
  onSubmit: (event: FormEvent<AgeFormElements>) => void
}

export const AgeForm: FC<IAgeFormProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input name="age" type="number" placeholder="Your age" />
      <ButtonChat style={{ marginTop: 20 }} type="submit">
        NEXT
      </ButtonChat>
    </form>
  )
}
