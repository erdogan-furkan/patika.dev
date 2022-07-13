import { useState, useEffect, useContext, createContext } from "react";

const BasketContext = createContext();

const defaultBasketItems = JSON.parse(localStorage.getItem("basket")) || [];

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(defaultBasketItems);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

  const addToBasket = (data, isInclude) => {
    if (isInclude) {
      const filtered = items.filter((item) => item._id !== data._id);
      return setItems(filtered);
    }

    setItems([...items, data]);
  };

  const emptyBasket = () => setItems([]);

  const values = {
    items,
    setItems,
    addToBasket,
    emptyBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
