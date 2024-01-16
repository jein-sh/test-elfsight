import { useEffect } from "react";
import { BtnClose, Container, Dot, Name, Popup, Status, Text, Content, Image, Wrapper } from "./styles";

import { Character } from "../../../types/types";
import CloseSvg from "./close-svg";


type PopupProps = {
  active: boolean,
  onClose: () => void,
  character: Character | undefined
}

function PopupCharacter({active, onClose, character}:PopupProps): JSX.Element {

  const keydownHandler = ({key} : KeyboardEvent ) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return (
    <Popup $opened={active} onClick={onClose}>
      <Container onClick={(e: { stopPropagation: () => void; }) => e.stopPropagation()}>
        <BtnClose onClick={onClose}>
          <CloseSvg />
        </BtnClose>
        <Wrapper>
          {
            character ? 
            <>
                <Image>
                   <img src={character.image} alt={character.name} />
                </Image>
                <Content>
                  <div>
                    <Name>{character.name}</Name>
                    <Status>
                       <Dot />
                       <span>{character.status}</span>
                    </Status>
                  </div>
                  <div>
                    <Text>Gender:</Text>
                    <div>{character.gender}</div>
                  </div>
                  <div>
                    <Text>Species:</Text>
                    <div>{character.species}</div>
                  </div>
                  {
                    character.type.length ?
                      <div>
                        <Text>Type:</Text>
                        <div>{character.type}</div>
                      </div>:
                      null
                  }
                  <div>
                    <Text>Last known location:</Text>
                    <div>{character.location.name}</div>
                  </div>
                </Content>
            </>:
            null
          }

        </Wrapper>

      </Container>
    </Popup>
  );
}

export default PopupCharacter;