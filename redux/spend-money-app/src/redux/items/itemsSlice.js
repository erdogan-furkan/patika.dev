import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [
      {
        id: 1,
        name: "Big Mac",
        image: "https://neal.fun/spend/images/big-mac.jpg",
        price: 2,
        amount: 0,
      },
      {
        id: 2,
        name: "Flip Flops",
        image: "https://neal.fun/spend/images/flip-flops.jpg",
        price: 3,
        amount: 0,
      },
      {
        id: 3,
        name: "Coca-Cola Pack",
        image: "https://neal.fun/spend/images/coca-cola-pack.jpg",
        price: 5,
        amount: 0,
      },
      {
        id: 4,
        name: "Movie Ticket",
        image: "https://neal.fun/spend/images/movie-ticket.jpg",
        price: 12,
        amount: 0,
      },
      {
        id: 5,
        name: "Book",
        image: "https://neal.fun/spend/images/book.jpg",
        price: 15,
        amount: 0,
      },
      {
        id: 6,
        name: "Lobster Dinner",
        image: "https://neal.fun/spend/images/lobster-dinner.jpg",
        price: 45,
        amount: 0,
      },
      {
        id: 7,
        name: "Video Game",
        image: "https://neal.fun/spend/images/video-game.jpg",
        price: 60,
        amount: 0,
      },
      {
        id: 8,
        name: "Amazon Echo",
        image: "https://neal.fun/spend/images/amazon-echo.jpg",
        price: 99,
        amount: 0,
      },
      {
        id: 9,
        name: "Year of Netflix",
        image: "https://neal.fun/spend/images/year-of-netflix.jpg",
        price: 100,
        amount: 0,
      },
      {
        id: 10,
        name: "Air Jordans",
        image: "https://neal.fun/spend/images/air-jordans.jpg",
        price: 125,
        amount: 0,
      },
      {
        id: 11,
        name: "Airpods",
        image: "https://neal.fun/spend/images/airpods.jpg",
        price: 199,
        amount: 0,
      },
      {
        id: 12,
        name: "Gaming Console",
        image: "https://neal.fun/spend/images/gaming-console.jpg",
        price: 299,
        amount: 0,
      },
      {
        id: 13,
        name: "Drone",
        image: "https://neal.fun/spend/images/drone.jpg",
        price: 350,
        amount: 0,
      },
      {
        id: 14,
        name: "Smartphone",
        image: "https://neal.fun/spend/images/smartphone.jpg",
        price: 699,
        amount: 0,
      },
      {
        id: 15,
        name: "Bike",
        image: "https://neal.fun/spend/images/bike.jpg",
        price: 800,
        amount: 0,
      },
      {
        id: 16,
        name: "Kitten",
        image: "https://neal.fun/spend/images/kitten.jpg",
        price: 1500,
        amount: 0,
      },
      {
        id: 17,
        name: "Puppy",
        image: "https://neal.fun/spend/images/puppy.jpg",
        price: 1500,
        amount: 0,
      },
      {
        id: 18,
        name: "Auto Rickshaw",
        image: "https://neal.fun/spend/images/auto-rickshaw.jpg",
        price: 2300,
        amount: 0,
      },
    ],
    totalMoney: 100000000000,
    prevTotalMoney: 0,
  },
  reducers: {
    changeItemAmount: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find((i) => i.id === id);
      item.amount = amount;
    },
    setTotalMoney: (state, action) => {
      state.prevTotalMoney = state.totalMoney;
      state.totalMoney = 100000000000 - action.payload;
    },
  },
});

// selectors
export const selectItems = (state) => state.items.items;
export const selectItemsBuyed = (state) =>
  state.items.items.filter((item) => item.amount > 0);
export const selectTotalMoney = (state) => state.items.totalMoney;
export const selectPrevTotalMoney = (state) => state.items.prevTotalMoney;

// actions
export const { changeItemAmount, setTotalMoney } = itemsSlice.actions;

export default itemsSlice.reducer;
