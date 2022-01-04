import { configureStore } from "@reduxjs/toolkit";

import registerReducer from "./redux/RegisterSlices";

export default configureStore({
  reducer: {
    register: registerReducer,
  },
});
