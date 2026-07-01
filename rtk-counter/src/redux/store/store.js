import counter from "../../screens/counter.jsx";
import CounterReducers from "../slices/counter_slice.js"; // import it to access reducers
import { configureStore } from "@reduxjs/toolkit";

// now create a store
const store = configureStore({
  // after creation of store just register your reducers in store
  reducer: {
    counter: CounterReducers, // counter is registered in store
  },
});

export default store;
