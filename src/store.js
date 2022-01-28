import { configureStore } from "@reduxjs/toolkit";

import notificationsCounter from "./redux/Notifications";
import UserData from "./redux/UserData";

export default configureStore({
  reducer: {
    register: notificationsCounter,
    userData: UserData,
  },
});
