import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'

// Pages
import Home from './pages/public/Home'
import Loading from './components/Loading/Loading'

// Providers
import { AuthProvider } from './context/auth/authContext.jsx'

// Routes Models
import { PrivateRoutes, PublicRoutes } from './models/routes'
import AuthGuard from './guards/auth.guard'
import RoutesWithNotFound from './utilities/routes-with-not-found'
import { store } from './context/data/store'
import PublicLinks from './pages/Public/PublicLinks'

// Lazy Load Components
const Login = React.lazy(() => import('./pages/Public/Login'))
const Dashboard = React.lazy(() => import('./pages/Private/Dashboard'))
const Links = React.lazy(() => import('./pages/Private/Links'))

export default function App () {
  return (
        <Suspense fallback={<Loading />}>
        <AuthProvider>
          <Provider store={store}>
            <RoutesWithNotFound>
              <Route path='/' element={<Home />} />
              <Route path={`${PublicRoutes.SLUG_LINKS}/:slug`} element={<PublicLinks />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={PrivateRoutes.LINKS} element={<Links />}/>
              </Route>
            </RoutesWithNotFound>
          </Provider>
        </AuthProvider>
        </Suspense>
  )
}
