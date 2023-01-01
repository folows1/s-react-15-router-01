import { Route } from "react-router-dom"

const Welcome = () => {
  return <h1>
    Welcome!
    <Route path="/welcome/new-user">
      <p>Welcome, new user!</p>
    </Route>
  </h1>
}

export default Welcome