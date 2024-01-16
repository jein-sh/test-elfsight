import styled from 'styled-components';

const deadCharacterStatus = 'Dead'
const unknownCharacterStatus = 'unknown'

export const Card = styled.div`
  border-radius: 8px;
  background-color: #3b3e43;
  color: #f5f5f5;
  display: flex;
  flex-direction: row;
  height: 220px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 1px 11px 23px -18px rgba(34, 60, 80, 0.2);

  transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  &.disabled {
    cursor: not-allowed;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 1px 11px 23px -8px rgba(34, 60, 80, 0.4);
  }

  @media (max-width: 576px) {
    height: auto;
    width: 100%;
    flex-direction: column;
  }
`

export const Image = styled.div`
  flex: 2 1 0%;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`

export const Content = styled.div`
  flex: 3 1 0%;
  padding: 12px;
  display: flex;
  flex-direction: column;

  
  @media (max-width: 576px) {
    gap: 24px;
    padding: 16px;
  }
`

export const Name = styled.h2`
    margin: 0;
    margin-bottom: 8px;
`

export const Status = styled.div`
    display: flex;
    align-items: center;
    color: #9e9e9e;
    margin-bottom: 20px;
`

export const Dot = styled.div<{ $status?: string }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => (props.$status === deadCharacterStatus ? "#d63d2e" : props.$status === unknownCharacterStatus ? "#e8de20" : "#55cc44")};
    display: inline-block;
    margin-right: 8px;
`

export const Text = styled.div`
    color: #9e9e9e;
    margin-bottom: 4px;
`
