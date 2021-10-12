import { Redirect, Route, Switch } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../../router/routes'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useContext } from 'react'
import { FirebaseContext } from '../../context/context'

const AppRouter = (): JSX.Element => {

  const { auth } = useContext(FirebaseContext)
  const [user] = useAuthState(auth)

  return (
    <>
      {
        user
          ? <Switch>
            {
              privateRoutes.map((route, index) => <Route path={route.path}
                                                          component={route.component}
                                                          exact={route.exact}
                                                          key={index}
                />
              )
            }
            <Redirect to={'/chat'} />
          </Switch>
          : <Switch>
            {
              publicRoutes.map((route, index) => <Route path={route.path}
                                                         component={route.component}
                                                         exact={route.exact}
                                                         key={index}
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