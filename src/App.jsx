import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

// Pages
import Loading from './components/Loading/Loading'

// Providers
import { AuthProvider } from '@/context/auth/authContext'
import { LinksProvider } from '@/context/data/linksContext'
// Routes Models
import { PrivateRoutes, PublicRoutes } from '@/config/routes'
import AuthGuard from '@/guards/auth.guard'
import RoutesWithNotFound from '@/utilities/routes-with-not-found'

// Lazy Load Components
const Login = React.lazy(() => import('@/pages/Public/LoginPage'))
const Dashboard = React.lazy(() => import('@/pages/Private/Dashboard'))
const Links = React.lazy(() => import('@/pages/Private/Links'))
const EditLinks = React.lazy(() => import('@/pages/Private/EditLinks'))
const PublicLinks = React.lazy(() => import('@/pages/Public/PublicLinks'))
const Home = React.lazy(() => import('@/pages/public/Home'))

export default function App () {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <AuthProvider>
          <LinksProvider>
            <RoutesWithNotFound>
              <Route path="/" element={<Home />} />
              <Route
                path={`${PublicRoutes.SLUG_LINKS}/:slug`}
                element={<PublicLinks />}
              />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={PrivateRoutes.LINKS} element={<Links />} />
                <Route
                  path={`${PrivateRoutes.LINKS}/${PrivateRoutes.EDIT_LINKS}/:id`}
                  element={<EditLinks />}
                />
              </Route>
            </RoutesWithNotFound>
          </LinksProvider>
        </AuthProvider>
      </Suspense>
    </>
  )
}
