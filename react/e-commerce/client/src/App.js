import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import ProtectedRoute from "./pages/ProtectedRoute";
import Error404 from "./pages/Error404";
import Admin from "./pages/Admin";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={<Profile />} />}
          />
          <Route
            path="/admin/*"
            element={<ProtectedRoute component={<Admin />} admin={true} />}
          />
          <Route
            path="/basket"
            element={<ProtectedRoute component={<Basket />} />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
