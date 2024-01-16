import styled from 'styled-components';


export const List = styled.div`
    width: 100%;
    overflow: hidden;
    margin: 48px 0 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
`
