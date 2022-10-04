import React from 'react'
import { LinkStyle } from './Link.styles'

export default function Link ({ children, href }) {
  return (
    <LinkStyle to={href}>
      {children}
    </LinkStyle>
  )
}
