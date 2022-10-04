import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

export const LinkStyle = styled(Link)`
    color:  #27272a;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    cursor: pointer;
    :hover {
        color: #0284c7;
    }
    transition: ease-in-out 0.2s;
`
