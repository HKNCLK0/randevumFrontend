import { configureStore } from "@reduxjs/toolkit";

import notificationsCounter from "./redux/Notifications";

export default configureStore({
  reducer: {
    register: notificationsCounter,
  },
});
