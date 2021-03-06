import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
