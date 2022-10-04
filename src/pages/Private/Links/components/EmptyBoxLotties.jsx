import React from 'react'
import Lottie from 'lottie-react'

// lotties
import animationData from '@/assets/lotties/box-empty.json'
import { EmptyBox } from '../styled-components/EmptyBoxLotties.styles'

export default function EmptyBoxLotties () {
  return <EmptyBox animationData={animationData} />
}
