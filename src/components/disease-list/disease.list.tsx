import { FC } from 'react'
import { ButtonChat } from '../ui/buttons/button.styled'

interface IDiseaseListProps {
  data: Array<string>
  onClick: (disease: string) => void
}

export const DiseaseList: FC<IDiseaseListProps> = ({ data, onClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '30px 0',
      }}
    >
      {data.map((item) => (
        <ButtonChat onClick={() => onClick(item)} key={item}>
          {item}
        </ButtonChat>
      ))}
    </div>
  )
}
