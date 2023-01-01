import { Link, Outlet, Route, Routes } from "react-router-dom"

const Welcome = () => {
  return <section>
    <h1>
      Welcome!
    </h1>
    <Link to="new-user">New User?</Link>
    {/* <Routes>
      <Route path="new-user" element={<p>Welcome New User!</p>} />
    </Routes> */}
    <Outlet />
  </section>
}

export default Welcome