import { Route, Routes, Navigate } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} /> {/* Redirect */}
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path='new-user' element={<p>Welcome New User!</p>} /> {/* Nested Route */}
          </Route>
          <Route path="/products" element={<Products />} exact />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// Router v5 - React Router
// eslint-disable-next-line no-lone-blocks
{
  /* <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
        </Switch>
      </main>
</div> */
}
