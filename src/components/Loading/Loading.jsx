import React from 'react'
import { RiseLoader } from 'react-spinners'
import { LoadingContainer } from './Loading.styles'

export default function Loading () {
  return (
    <LoadingContainer>
        <RiseLoader color='#18181B' />
    </LoadingContainer>
  )
}
