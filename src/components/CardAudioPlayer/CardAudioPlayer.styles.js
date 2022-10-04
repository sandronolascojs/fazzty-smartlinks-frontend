import { theme } from '@/theme'
import styled from '@emotion/styled'

export const CardAudioPlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 10px 0 2px 0;
`

export const CardAudioPlayerBarProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`
export const CardAudioPlayerBarProgressBackground = styled.div`
  display: flex;
  width: 100%;
  height: 6px;
  cursor: pointer;
  border-radius: 25px;
  background-color: ${theme.colors.grayBackground};
`
export const CardAudioPlayerBarProgress = styled.div`
  width: ${(props) => props.progress}%;
  height: 6px;
  border-radius: 25px;
  background-color: ${theme.colors.lightSkyBlue};
`
export const CardAudioPlayerBarTime = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: ${theme.fonts.semibold};
  color: ${theme.colors.textColorCuaternary};
`

export const CardAudioPlayerButton = styled.button`
    color: ${theme.colors.textPrincipal};
    transition: all 0.3s ease-in-out;
    :hover {
        color: ${theme.colors.lightSkyBlue};
    }
`
