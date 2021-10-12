import { Redirect, Route, Switch } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../../router/routes'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useContext } from 'react'
import { Context } from '../../context/context'

const AppRouter = () => {

  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <>
      {
        user
          ? <Switch>
            {
              privateRoutes.map(route => <Route path={route.path}
                                                component={route.component}
                                                exact={route.exact}
                                                key={route}
                />
              )
            }
            <Redirect to={'/chat'} />
          </Switch>
          : <Switch>
            {
              publicRoutes.map(route => <Route path={route.path}
                                               component={route.component}
                                               exact={route.exact}
                                               key={route}
                />
              )
            }
            <Redirect to={'/login'} />
          </Switch>
      }
    </>
  )
}

export default AppRouter