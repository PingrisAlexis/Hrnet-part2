import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 0.5rem;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  border: none;
  border-radius: 0.3rem;
  padding: 1rem;
  background: none;
  font-size: 2.5rem;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.p`
  padding: 5rem;
  display: block;
  font-size: 1.6rem;
  overflow-x: hidden;
  overflow-y: auto;
`;