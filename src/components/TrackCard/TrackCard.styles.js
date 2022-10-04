import styled from '@emotion/styled'
import { theme } from '@/theme'

export const TrackCardContainer = styled.article`
  width: 280px;
`

export const TrackCardWrapper = styled.div`
  background-color: #f4f4f5;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border: 1px solid #e4e4e7;
`

export const TrackCardImage = styled.img`
  height: 250px;
  width: 250px;
  display: block;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  backface-visibility: hidden;
  opacity: 1;
`
export const TrackCardButtonsContainer = styled.div`
  position: absolute;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`

export const TrackCardButtons = styled.button`
  background-color: ${theme.colors.boxColorPrincipal};
  border: 1px solid ${theme.colors.borderColorPrincipal};
  border-radius: 25px;
  color: ${theme.colors.textPrincipal};
  align-items: center;
  justify-content: center;
  padding: 18px;
  opacity: 0.6;
  :hover {
    opacity: 1;
    transform: scale(1.1);
  }
  transition: all 0.1s ease-in-out;
`

export const TrackCardImageHoverWrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  border-radius: 8px;
  :hover ${TrackCardImage} {
    opacity: 0.3;
  }
  :hover ${TrackCardButtonsContainer} {
    opacity: 1;
  }
`
export const TrackCardCopyedMessage = styled.span`
  display: flex;
  margin: 16px 0;
  gap: 4px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: fit-content;
  color: #fff;
  border: 1px solid #a1a1aa;
  font-weight: 500;
  background-color: rgba(39, 39, 42, 0.8);
  padding: 8px 44px;
  border-radius: 6px;
`

export const TrackCardTitle = styled.h2`
  color: #27272a;
  font-size: 20px;
  font-weight: 900;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 12px;
`

export const TrackCardArtist = styled.p`
  color: #52525b;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
