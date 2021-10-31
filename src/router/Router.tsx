import { Route, Switch } from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { Page1 } from '../components/pages/Page1'

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Page1">
        <Page1 />
      </Route>
    </Switch>
  )
}
