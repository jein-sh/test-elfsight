import { Card, Image, Content, Name, Dot, Status, Text } from './styles'

export type CharacterCardProps = {
  imgUrl: string,
  name: string,
  status:string,
  species: string,
  gender: string,
  onClick?: () => void,
  disabled?: boolean
}

export const CharacterCard = ({
  imgUrl,
  name,
  status,
  gender,
  onClick
}:CharacterCardProps) => {
  return (
    <Card
      onClick={onClick}
    >
      <Image>
        <img src={imgUrl} alt={name} />
      </Image>
      <Content>
        <div>
          <Name>{name}</Name>
          <Status>
            <Dot $status={status}/>
            <span>{status}</span>
          </Status>
        </div>
        <div>
          <Text>Gender:</Text>
          <div>{gender}</div>
        </div>
      </Content>
    </Card>
  )
}
