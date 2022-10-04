import styled from '@emotion/styled'

export const ModalBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(33, 33, 33, 0.5);
  backdrop-filter: blur(12px);
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 10;
  transition: all 0.3s ease-in-out;
`

export const ModalContainer = styled.div`
  background-color: #fafaffd9;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: auto;
  height: auto;
  border-radius: 6px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`
