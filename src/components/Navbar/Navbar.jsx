import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthContext from '@/hooks/useAuthContext'

// routes model
import { PrivateRoutes, PublicRoutes } from '@/models/routes'

// utils
import { getLocalStorageUser } from '@/utilities/localStorage'

// components
import Link from '../Link'
import PrimaryButton from '@/components/PrimaryButton'
import SecundaryButton from '../SecundaryButton/SecundaryButton'

// styles
import {
  NavbarButtonsContainer,
  NavbarHeader,
  NavbarList,
  NavbarListItem,
  NavbarLogo,
  NavbarLogoContainer,
  NavbarLogoText,
  NavbarWrapper
} from './Navbar.styles'

export default function Navbar () {
  const { logout } = useAuthContext()
  const navigate = useNavigate()

  const path = window.location.pathname

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const handleDashboard = () => {
    navigate('/dashboard')
  }

  if (!getLocalStorageUser()) {
    return (
      <NavbarHeader>
        <NavbarWrapper>
          <Link href={'/'}>
            <NavbarLogoContainer>
              <NavbarLogo viewBox="0 0 512 512">
                <g>
                  <path d="M366.56,234.0073a12.7668,12.7668,0,0,0-11.753-7.5747H296.9443L331.3965,94.6015a14.0681,14.0681,0,0,0-24.1944-12.8252L147.4844,264.1606a12.905,12.905,0,0,0,9.709,21.4067h57.8623L180.6035,417.3984a13.8446,13.8446,0,0,0,7.0225,15.9868,14.2368,14.2368,0,0,0,6.68,1.6924,13.8939,13.8939,0,0,0,10.4922-4.854L364.5156,247.8393A12.7656,12.7656,0,0,0,366.56,234.0073Z" />
                </g>
              </NavbarLogo>
              <NavbarLogoText>Fazzty</NavbarLogoText>
            </NavbarLogoContainer>
          </Link>

          <NavbarList>
            <Link href={`${PublicRoutes.HOME}`}>
              <NavbarListItem>Home</NavbarListItem>
            </Link>
            <Link href={`${PublicRoutes.RANKING}`}>
              <NavbarListItem>Ranking</NavbarListItem>
            </Link>
            <Link href={`${PublicRoutes.ABOUT}`}>
              <NavbarListItem>About</NavbarListItem>
            </Link>
            <Link href={`${PublicRoutes.CONTACT}`}>
              <NavbarListItem>Contact</NavbarListItem>
            </Link>
          </NavbarList>

          <NavbarButtonsContainer>
            <PrimaryButton clickFunction={handleLogin}>Login</PrimaryButton>
          </NavbarButtonsContainer>
        </NavbarWrapper>
      </NavbarHeader>
    )
  }

  return (
    <NavbarHeader>
      <NavbarWrapper>
        <Link href={'/'}>
          <NavbarLogoContainer>
            <NavbarLogo viewBox="0 0 512 512">
              <g>
                <path d="M366.56,234.0073a12.7668,12.7668,0,0,0-11.753-7.5747H296.9443L331.3965,94.6015a14.0681,14.0681,0,0,0-24.1944-12.8252L147.4844,264.1606a12.905,12.905,0,0,0,9.709,21.4067h57.8623L180.6035,417.3984a13.8446,13.8446,0,0,0,7.0225,15.9868,14.2368,14.2368,0,0,0,6.68,1.6924,13.8939,13.8939,0,0,0,10.4922-4.854L364.5156,247.8393A12.7656,12.7656,0,0,0,366.56,234.0073Z" />
              </g>
            </NavbarLogo>
            <NavbarLogoText>Fazzty</NavbarLogoText>
          </NavbarLogoContainer>
        </Link>

        <NavbarList>
          <Link href={`/${PrivateRoutes.DASHBOARD}`}>
            <NavbarListItem>Dashboard</NavbarListItem>
          </Link>
          <Link href={`/${PrivateRoutes.LINKS}`}>
            <NavbarListItem>Links</NavbarListItem>
          </Link>
          <Link href={`/${PrivateRoutes.STATISTICS}`}>
            <NavbarListItem>Stats</NavbarListItem>
          </Link>
          <Link href={`/${PrivateRoutes.ACCOUNT}`}>
            <NavbarListItem>Account</NavbarListItem>
          </Link>
        </NavbarList>

        <NavbarButtonsContainer>
          <PrimaryButton clickFunction={handleLogout}>Logout</PrimaryButton>

          {path === '/' && getLocalStorageUser()
            ? (
            <SecundaryButton clickFunction={handleDashboard}>
              Dashboard
            </SecundaryButton>
              )
            : null}
        </NavbarButtonsContainer>
      </NavbarWrapper>
    </NavbarHeader>
  )
}
