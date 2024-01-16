import styled from 'styled-components';

const deadCharacterStatus = 'Dead'
const unknownCharacterStatus = 'unknown'

export const Popup = styled.div<{ $opened: boolean }>`
  display: ${(props) => props.$opened ? "flex" : "none"};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(5, 5, 16, 0.16);
  justify-content: center;
  align-items: center;
  z-index: 20;
`

export const Container = styled.div`
  position: relative;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 18px;
  margin: 10px;
`

export const BtnClose = styled.button`
  position: absolute;
  top: 24px;
  right: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  border-radius: 50%;
  background-color: #F7F7F8;
  color: #C3C3C6;
  cursor: pointer;
  transition: color 0.3s ease;


  &:hover,
  &:focus {
    color: #97979B;
  }
`

export const Card = styled.div`
  border-radius: 8px;
  background-color: #3b3e43;
  color: #f5f5f5;
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow-y: auto;
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

export const Wrapper = styled.div`
  width: 100%;
  display: flex;

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

export const Dot = styled.div<{ status?: string }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => (props.status === deadCharacterStatus ? "#d63d2e" : props.status === unknownCharacterStatus ? "#e8de20" : "#55cc44")};
    display: inline-block;
    margin-right: 8px;
`

export const Text = styled.div`
    color: #9e9e9e;
    margin-bottom: 4px;
`