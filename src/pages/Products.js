import { Link, useNavigate } from "react-router-dom"

const Products = () => {
  const nav = useNavigate(); // useNavigate() is a hook that returns a function that can be used to navigate programmatically

  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li><Link to="/products/p1">A Book</Link></li>
        <li><Link to="/products/p2">A Carpet</Link></li>
        <li><Link to="/products/p3">A Course</Link></li>
      </ul>
    </section>
  )
}

export default Products