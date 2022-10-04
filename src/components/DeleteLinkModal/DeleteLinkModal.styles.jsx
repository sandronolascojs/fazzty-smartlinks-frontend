import styled from '@emotion/styled'

export const DeleteLinkModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 16px;
`

export const DeleteLinkModalImage = styled.img`
  width: 264px;
  height: 264px;
  object-fit: cover;
  border-radius: 6px;
`

export const DeleteLinkModalInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 16px;
`

export const DeleteLinkModalTextSection = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 264px;
  height: auto;
  padding: 16px;
`

export const DeleteLinkModalButtonSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 264px;
  height: auto;
`

export const DeleteLinkModalTextPrincipal = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 900;
  color: #27272a;
  text-align: left;
`

export const DeleteLinkModalTextSecondary = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #52525bd9;
  text-align: left;
`

export const DeleteLinkModalTextError = styled.span`
  margin-left: 10px;
  margin-top: 16px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding: 8px 16px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background-color: rgba(200, 38, 38, 0.8);
`
