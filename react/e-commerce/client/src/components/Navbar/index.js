import { Button } from "@chakra-ui/react";
import styles from "./styles.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";

function Navbar() {
  const { loggedIn, user } = useAuth();
  const { items } = useBasket();

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">eCommerce</Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {!loggedIn ? (
          <>
            <Link to="/signin">
              <Button colorScheme="pink">Login</Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme="pink">Register</Button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/basket">
              <Button colorScheme="pink" variant="outline">
                Basket ({items.length})
              </Button>
            </Link>

            {user?.role === "admin" && (
              <Link to="/admin" style={{ marginRight: 5 }}>
                <Button>Admin</Button>
              </Link>
            )}

            <Link to="/profile">
              <Button>Profile</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
