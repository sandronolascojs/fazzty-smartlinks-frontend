import { theme } from '@/theme'
import styled from '@emotion/styled'

export const DangerButtonStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${theme.colors.lightAppleRed};
  color: ${theme.colors.textSecundary};
  font-size: 16px;
  line-height: 24px;
  padding: 8px 20px;
  border-radius: 6px;
  :hover {
    background-color: ${theme.colors.darkAppleRed};
  }
  transition: ease-in-out 0.2s;
`
