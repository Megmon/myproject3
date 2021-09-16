import { Route, Switch } from 'react-router-dom'
import { Home } from '../Home'
import { Page1 } from '../Page1'

export const Router = () => {
  return (
    <switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Page1">
        <Page1 />
      </Route>
    </switch>
  )
}
