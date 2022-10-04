import { theme } from '@/theme'
import styled from '@emotion/styled'

export const ModalBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0px 256px 34px 0px; 
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  transition: all 0.3s ease-in-out;
`

export const ModalContainer = styled.div`
  background-color: ${theme.colors.boxColorPrincipal};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: auto;
  height: auto;
  border-radius: 6px;
  box-shadow: ${theme.colors.boxShadow};
`
