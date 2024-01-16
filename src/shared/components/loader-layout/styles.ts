import styled from 'styled-components';


export const Layout = styled.div<{ $visible: boolean }>`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #000000, $alpha: 0.8);
  display: flex;
  position: fixed;
  z-index: ${(props) => (props.$visible ? 10 : -1)};
  top: 0;
  display: none;

  &.noScroll {
    overflow-y: hidden;
  }
`
