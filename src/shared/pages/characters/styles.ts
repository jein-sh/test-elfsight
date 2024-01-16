import styled from 'styled-components';


export const Wrapper = styled.div`
  padding: 48px 0;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
    font-size: 68px;
    font-weight: 900;
    text-align: center;
    color: #202329;

    @media (max-width: 576px) {
      font-size: 48px;
    }
`

export const Filter = styled.input`
    align-self: flex-end;
    padding: 10px 12px;
    width: calc(50% - 36px);
    text-overflow: ellipsis;
    color: #202329;

    &::placeholder {
      color: #9e9e9e;
    }

    @media (max-width: 768px) {
      width: auto;
      align-self: stretch;
    }
`